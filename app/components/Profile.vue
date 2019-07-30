<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label class="action-bar-title" text="Profile"></Label>
        </ActionBar>

        <StackLayout>
            <Label :text="address"></Label>
            <!-- <Image src="data:Image/png;base64,iVBORw..." stretch="none" /> -->
            <Image :src="qrDataURL" stretch="none" />
        </StackLayout>
    </Page>
</template>

<script>
import wallet from '../wallet'
var QRCode = require('qrcode')

export default {
    data() {
        return {
            address: wallet.getAddressString(),
            qrDataURL: ''
        }
    },
    async created() {
        console.log('test')
        QRCode.toDataURL('I am a pony!').then(url => {
                console.log('test2')
                // console.log(url)
                // this.qrDataURL = url
            })
    },
    // methods: {
    //     async getQR() {
    //         QRCode.toDataURL('I am a pony!')
    //             .then(url => {
    //                 this.qrDataURL = url
    //             })
    //     }
    // },
};
</script>

<style>

</style>
