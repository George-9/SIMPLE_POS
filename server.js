const { app } = require("./app/app");
const { DATE_UTIL } = require("./global_utils/dateUtil");
const { ERROR_HANDLER } = require("./global_utils/errorHandler");
const { FILE_UTILS } = require("./global_utils/fileHandler");
const { addCustomerCallback } = require("./routes_callbacks/addCustomer");
const { addProductCallback } = require("./routes_callbacks/addProduct");
const { addRouteCallback } = require("./routes_callbacks/addRoute");
const { getAllCustomersCallback } = require("./routes_callbacks/getAllCustomers");
const { getAllProductsCallback } = require("./routes_callbacks/getAllProducts");
const { getAllRoutesCallback } = require("./routes_callbacks/getAllRoutes");
const { homeCallback } = require("./routes_callbacks/homeCallback");
const { SERVER_CONSTANTS } = require("./server_details/constants");

try {
    /**
     * home
     */
    app.get('/', homeCallback);

    app.post('/add/customer', addCustomerCallback);
    app.post('/add/route', addRouteCallback);
    app.post('/add/product', addProductCallback);

    app.get('/products', getAllProductsCallback);
    app.get('/routes', getAllRoutesCallback);
    app.get('/customers', getAllCustomersCallback);

    //server run
    app.listen(SERVER_CONSTANTS.port, function () {
        console.log('::server running on port::', SERVER_CONSTANTS.port);
    });
} catch (err) {
    FILE_UTILS.writeToFile(`${DATE_UTIL.today} ${err} \n`, ERROR_HANDLER.errorsFileName);
}
