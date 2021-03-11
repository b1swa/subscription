const moment = require("moment");
let db = require("./model");
// db.connect();

function get(username){
    let queryString = "SELECT * FROM user where username="+ username;
    let result = db.query(queryString);
    return result;
    // db.disconnect();
}

function add(username){
    let created_at = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    let queryString = `INSERT INTO user(username,created_at) VALUES ('${username}', '${created_at}');`;
    let result = db.query(queryString);
    return result;
}

module.exports.get = get;
module.exports.add = add;