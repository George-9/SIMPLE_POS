const fs = require('fs')

class FILE_UTILS {
    constructor() { }

    static writeToFile(data, filename) {
        fs.appendFile(filename, data + '\n', (err) => {
            if (err) {
                console.error('Failed to write to file:', err);
            } else {
                console.log(`Data written to ${filename}`);
            }
        });
    }
}

module.exports = { FILE_UTILS }