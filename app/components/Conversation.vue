<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label class="action-bar-title" :text="conversation.text"></Label>
        </ActionBar>

        <!-- <DockLayout stretchLastChild="true">
            <GridLayout height="70" dock="bottom" columns="*, auto" style="padding: 10; background-color: red;">
                <TextField row="0" col="0" v-model="text"></TextField>
                <Button row="0" col="1" text="send" @tap="send"></Button>
            </GridLayout>
            <ScrollView dock="top" style="background-color: yellow;">
                <ListView for="message in messages" padding="5" height="100%" style="background-color: blue;">
                    <v-template>
                        <Message :message="message"></Message>
                    </v-template>
                </ListView>
            </ScrollView>
        </DockLayout> -->

        <GridLayout rows="*, auto">
            <ScrollView style="background-color: yellow;">
                <ListView for="message in messages" padding="5" style="background-color: blue;">
                    <v-template>
                        <Message :message="message"></Message>
                    </v-template>
                </ListView>
            </ScrollView>
            <GridLayout columns="*, auto" style="padding: 10; background-color: red;" verticalAlignment="bottom">
                <TextField row="0" col="0" v-model="text"></TextField>
                <Button row="0" col="1" text="send" @tap="send"></Button>
            </GridLayout>
        </GridLayout>


    </Page>
</template>

<script>
import Message from "./Message";

export default {
    data: function(){
        return {
            messages: [
                {text: 'Hi there', sender: 'me'},
                {text: 'This is a test', sender: 'Vincent'},
                {text: 'Here is another one.', sender: 'me'},
            ],
            text: ''
        }
    },
    methods: {
        send(){
            console.log(this.text);
            this.messages.push({sender: 'me', text: this.text})
        }
    },
    props: ['conversation'],
    components: {'Message': Message}
};
</script>

<style scoped>

ListView {
    seperator-color: white;
}

</style>

