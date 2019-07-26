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

    export default {
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
