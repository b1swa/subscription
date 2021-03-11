const moment = require("moment");
let db = require("./model");

function get(username, date){
    let queryString = `SELECT * FROM subscription where username=${username} AND start_date=${date}`;
    let result = db.query(queryString);
    return result;
}

function add(subscription_details){

    let plan_details = getPlanDetails(subscription_details.plan_id);

    let valid_till = moment(subscription_details.start_date, "YYYY-MM-DD").add(plan_details.validity, 'days');

    let queryString = `INSERT INTO subscription(username, plan_id, start_date, valid_till) 
                        VALUES ('${subscription_details.user_name}', '${subscription_details.plan_id}', 
                                '${subscription_details.start_date}', '${valid_till}');`;
    
    let result = db.query(queryString);
    return result;
}

function getAll(username){
    let queryString = `SELECT * FROM subscription where username='${username}'`;
    let result = db.query(queryString);
    return result;
}

async function getPlanDetails(plan_id){
    let queryString = `SELECT * FROM plan WHERE plan_id='${plan_id}'`;
    let result;
    db.query(queryString, function(res){
        result = res;
    });
}

module.exports.get = get;
module.exports.add = add;
module.exports.getAll = getAll;