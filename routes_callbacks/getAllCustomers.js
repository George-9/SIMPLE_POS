const { DB_CONTRACT } = require("../db/DBCli");

async function getAllCustomersCallback(_req, resp) {
    const customers = await DB_CONTRACT.customers();
    console.log(customers);

    resp.json(customers);
}

module.exports = { getAllCustomersCallback }