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

    var bsv = require('bsv');
    var Mnemonic = require('bsv/mnemonic')

    export default {
        created() {;

            var secureStorage = new SecureStorage();

            var HDPrivKeyS = secureStorage.getSync({key: "HDPrivKey"})
            if (HDPrivKeyS) {
                HDPrivKey = bsv.HDPrivateKey.fromString(HDPrivKeyS)
            } else {
                var mnemonic = Mnemonic.fromRandom()
                console.log(mnemonic.toString())
                var HDPrivKey = mnemonic.toHDPrivateKey()
                secureStorage.setSync({
                    key: "HDPrivKey",
                    value: HDPrivKey.toString()
                })
                console.log('done')
            }
            var HDPubKey = bsv.HDPublicKey.fromHDPrivateKey(HDPrivKey)
            console.log(HDPubKey.toString())
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
