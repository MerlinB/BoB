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
    import Conversations from "./Conversations";
    var SecureStorage = require("nativescript-secure-storage").SecureStorage;
    var bsv = require('bsv');
    import Mnemonic from "../mnemonic";

    var secureStorage = new SecureStorage();

    export default {
        created() {
            var HDPrivKeyS = secureStorage.getSync({key: "HDPrivKey"})
            if (HDPrivKeyS) {
                HDPrivKey = bsv.HDPrivateKey.fromString(HDPrivKeyS)
            } else {
                var mnemonic = Mnemonic.fromRandom()
                console.log(mnemonic.toString())
                HDPrivKey = mnemonic.toHDPrivateKey()
                secureStorage.setSync({
                    key: "HDPrivKey",
                    value: HDPrivKey.toString()
                })
            }
            var HDPubKey = bsv.HDPublicKey.fromHDPrivateKey(HDPrivKey)
            this.pubKey = HDPubKey.pubKey
            console.log(this.pubKey)
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
