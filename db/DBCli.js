const { MongoClient } = require("mongodb");

const dbName = 'm_kenya_dairy';
const connectionString = 'mongodb://localhost:27017';

const routesCollection = 'routes';
const productsCollection = 'products';
const customersCollection = 'customers';

class DB_CONTRACT {
    constructor() { }

    static get connetctedClient() {
        return new MongoClient(connectionString);
    }

    /**
     * @todo implement verification for transactions
     */
    static verify() { }

    static async addProduct(product) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(productsCollection)
            .insertOne(product))
            .insertedId
            .id;
    }

    static async addRoute(route) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(routesCollection)
            .insertOne(route))
            .insertedId
            .id;
    }

    /**
     * add a customer to a route
     * @param {Customer} customer
     * @returns {string | null} inserted document id or null if not inserted
     */
    static async addCustomer(customer) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(customersCollection)
            .insertOne(customer))
            .insertedId
            .id;
    }

    static async routes() {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(routesCollection)
            .find()
            .toArray())
    }

    static async customers() {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(customersCollection)
            .find()
            .toArray())
    }


    static async products() {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(productsCollection)
            .find()
            .toArray())
    }

    static async getRouteById(id) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(routesCollection)
            .findOne({ '_id': id }));
    }

    static async getCustomerById(id) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(customersCollection)
            .findOne({ '_id': id }));
    }

    static async getProductById(id) {
        return (await DB_CONTRACT
            .connetctedClient
            .db(dbName)
            .collection(productsCollection)
            .findOne({ '_id': id }));
    }
}

module.exports = { DB_CONTRACT }