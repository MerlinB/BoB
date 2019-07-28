<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="BOB"></Label>
        </ActionBar>

        <Conversations>
        </Conversations>
    </Page>
</template>

<script>
    global.process = require("process/browser");
    global.window = {'crypto': require("crypto-browserify")}
    // global.Buffer = require("buffer").Buffer;

    import Conversations from "./Conversations";
    var SecureStorage = require("nativescript-secure-storage").SecureStorage;

    // var mockery = require('mockery')
    // mockery.enable();
    // mockery.registerSubstitute('crypto', 'crypto-browserify')

    // import rewiremock from 'rewiremock/webpack';
    // rewiremock.overrideEntryPoint(module);
    // rewiremock.enable()
    // rewiremock.registerSubstitute('crypto', 'crypto-browserify')


    var bsv = require('bsv');
    var Mnemonic = require('bsv/mnemonic')
    // import Mnemonic from "../mnemonic";
    // var crypto = require('crypto-js')

    export default {
        created() {;

            // var a = require('crypto-browserify')
            // console.log(a.createHash('sha256'))

            // var createHash = require('create-hash/browser')
            // console.log(createHash('sha256'))

            console.log('done')

            var mnemonic = Mnemonic.fromRandom()
            console.log(mnemonic.toString())

            // var secureStorage = new SecureStorage();

            // var key = crypto.SHA256('TESTEST')
            // console.log(key)



            // bsv.crypto.Hash = require('../hash')

            // var HDPrivKeyS = secureStorage.getSync({key: "HDPrivKey"})
            // if (HDPrivKeyS) {
            //     HDPrivKey = bsv.HDPrivateKey.fromString(HDPrivKeyS)
            // } else {
            //     var mnemonic = Mnemonic.fromRandom()
            //     console.log(mnemonic.toString())
            //     HDPrivKey = mnemonic.toHDPrivateKey()
            //     secureStorage.setSync({
            //         key: "HDPrivKey",
            //         value: HDPrivKey.toString()
            //     })
            // }
            // var HDPubKey = bsv.HDPublicKey.fromHDPrivateKey(HDPrivKey)
            // this.pubKey = HDPubKey.pubKey
            // console.log(this.pubKey)
        },
        components: {'Conversations': Conversations}
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
