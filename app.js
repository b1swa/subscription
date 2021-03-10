const express = require('express');
// const mysql = require('mysql');


// const db = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '12345678',
    //     // database: ''
    // });
    
    // db.connect((err)=>{
        //     if(err){
            //         throw err;
            //     }
            //     console.log('MySql Connected....');
            // });
            

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


app.listen('3000', () => {
    console.log('Server started on port 3000');
})