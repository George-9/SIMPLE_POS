const { DB_CONTRACT } = require("../db/DBCli");

async function addRouteCallback(req, resp) {
    const { route_name, marketer } = req.body;
    const saveResult = await DB_CONTRACT.addRoute({ name: route_name, marketer: marketer })

    resp.json({
        'response': saveResult
            ? 'success'
            : 'something went wrong'
    });
}

module.exports = { addRouteCallback }