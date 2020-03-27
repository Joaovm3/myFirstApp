const crypto = require('crypto'); //criptografia ID ONG

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}