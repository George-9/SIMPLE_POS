const { DB_CONTRACT } = require("../db/DBCli");

async function getAllProductsCallback(_req, resp) {
    const products = await DB_CONTRACT.products();
    console.log(products);

    resp.json(products);
}

module.exports = { getAllProductsCallback }