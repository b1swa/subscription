const express = require('express');
const mysql = require('mysql');


const db = mysql.createConnection({
        host: 'us-cdbr-east-03.cleardb.com',
        user: 'b88d1ffd93f724',
        password: 'a1bfaf00',
        database: 'heroku_3ee05a0394887a3'
    });
    
db.connect((err)=>{
        if(err){
                throw err;
            }
            console.log('MySql Connected....');
        });
            

const app = express();
const user = require("./routes/user");
const subscription = require("./routes/subscription");

app.use(express.json());
app.use("/user", user);
app.use("/subscription", subscription);



app.get('/', function (req, res) {
    res.send('server is running');
  });

app.get('/user', function(req,res) {
    res.send('user get request');
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Server started ...');
})