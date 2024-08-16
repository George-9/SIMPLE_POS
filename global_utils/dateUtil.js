class DATE_UTIL {
    constructor() { }

    static get today() {
        return (new Date()).toDateString()
    }
}

module.exports = { DATE_UTIL }