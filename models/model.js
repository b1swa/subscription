const mysql = require('mysql');

var db_config = {
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b88d1ffd93f724',
    password: 'a1bfaf00',
    database: 'heroku_3ee05a0394887a3'
}
  
  var connection;
  
  function handleDisconnect() {
    connection = mysql.createConnection(db_config); 
                                                    
    connection.connect(function(err) {              
      if(err) {                                     
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                     
    });                                     
                                            
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
    });
  }

  function disconnect() {
    connection.end();
  }

  function query(queryString) {
    handleDisconnect();
    let res;
    connection.query(queryString, function( error, results, fields){
      if(error){
          console.log(error);
          return error;
      }

      disconnect();
      return results;
    });
  }

  module.exports.query = query;