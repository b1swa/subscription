const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());



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