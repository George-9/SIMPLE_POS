const { DB_CONTRACT } = require("../db/DBCli");

async function addCustomerCallback(req, resp) {
    const customer = req.body.customer;

    const saveResult = DB_CONTRACT.addCustomer(customer);
    console.log(saveResult);
    resp.json({ 'response': saveResult ? 'success' : 'something went wrong' });
}

module.exports = { addCustomerCallback }