global.process = require("process/browser");
global.window = {'crypto': require("crypto-browserify")}

var bsv = require('bsv');
var Mnemonic = require('bsv/mnemonic')
import storage from './storage'

class Wallet {

    constructor() {
        const HDPrivKeyS = storage.getSync({key: "HDPrivKey"})
        console.log(HDPrivKeyS)
        if (HDPrivKeyS) {
            this.HDPrivKey = bsv.HDPrivateKey.fromString(HDPrivKeyS)
        }
        console.log(this.HDPrivKey)
    }

    init() {
        const mnemonic = Mnemonic.fromRandom()
        console.log(mnemonic.toString())
        var HDPrivKey = mnemonic.toHDPrivateKey()
        storage.setSync({
            key: "HDPrivKey",
            value: HDPrivKey.toString()
        })
        this.HDPrivKey = HDPrivKey
        console.log('Initialized wallet')
    }

    getAddress() {
        const pubKey = this.getPubKey()
        if (pubKey) {
            return bsv.Address.fromPublicKey(pubKey)
        }
    }

    getAddressString() {
        const address = this.getAddress()
        if (address) {
            return address.toString()
        }
        return ''
    }

    getPubKey() {
        if (this.HDPrivKey) {
            var HDPubKey = bsv.HDPublicKey.fromHDPrivateKey(this.HDPrivKey)
            return HDPubKey.publicKey
        }
    }
}

const wallet = new Wallet()

export default wallet
