<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label class="action-bar-title" text="Profile"></Label>
        </ActionBar>

        <StackLayout>
            <Label :text="address"></Label>
            <Image :src="qrDataURL" stretch="none" />
        </StackLayout>
    </Page>
</template>

<script>
import wallet from '../wallet'
import qrcode from 'qrcode-generator'

function resolveAfter2Seconds(x) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

export default {
    data() {
        return {
            address: wallet.getAddressString(),
        }
    },
    computed: {
        qrDataURL: function() {
            var typeNumber = 4;
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(this.address);
            qr.make();
            return qr.createDataURL(20)
        }
    },
};
</script>

<style>

</style>
