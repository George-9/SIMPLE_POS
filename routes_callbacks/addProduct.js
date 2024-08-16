const { DB_CONTRACT } = require("../db/DBCli");

async function addProductCallback(req, resp) {
    const product = req.body.produc;

    const saveResult = await DB_CONTRACT.addProduct(product);
    console.log(saveResult);
    resp.json({ 'response': saveResult ? 'success' : 'something went wrong' });
}

module.exports = { addProductCallback }