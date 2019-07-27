var Mnemonic = require('bsv/mnemonic')
var randomBytes = require('nativescript-randombytes');

/**
 * Internal function to generate a random mnemonic
 *
 * @param {Number} ENT - Entropy size, defaults to 128
 * @param {Array} wordlist - Array of words to generate the mnemonic
 * @returns {String} Mnemonic string
 */
Mnemonic._mnemonic = function (ENT, wordlist) {
    console.log(process.browser)
    var buf = randomBytes(ENT / 8)
    return Mnemonic._entropy2mnemonic(buf, wordlist)
}

module.exports = Mnemonic