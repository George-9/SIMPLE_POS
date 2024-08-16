const { DB_CONTRACT } = require("../db/DBCli");

async function getAllRoutesCallback(_req, resp) {
    const routes = await DB_CONTRACT.routes();
    console.log(routes);

    resp.json(routes);
}

module.exports = { getAllRoutesCallback }