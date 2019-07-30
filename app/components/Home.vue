<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="BOB"></Label>
            <ActionItem @tap="$navigateTo(Profile)"
                ios.systemIcon="16" ios.position="right"
                text="Show Address" android.position="popup"></ActionItem>
        </ActionBar>

        <Conversations>
        </Conversations>
    </Page>
</template>

<script>
    import Conversations from "./Conversations"
    import Profile from "./Profile"
    import wallet from '../wallet'


    export default {
        data() {
            return {
                Profile: Profile
            }
        },
        created() {
            if (!wallet.HDPrivKey) {
                wallet.init()
            }
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
