const moment = require("moment");
let db = require("./model");
// db.connect();

function getPlanDetails(plan_id){
    let queryString = `SELECT * FROM plan where plan_id="${plan_id}"`;
    let result = db.query(queryString);
    return result;
}

module.exports.getPlanDetails = getPlanDetails;