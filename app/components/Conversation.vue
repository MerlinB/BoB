<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label class="action-bar-title" :text="conversation.text"></Label>
        </ActionBar>

        <GridLayout rows="*, auto">
            <ScrollView>
                <ListView for="message in messages" padding="5">
                    <v-template>
                        <Message :message="message"></Message>
                    </v-template>
                </ListView>
            </ScrollView>
            <GridLayout class="chatBox" columns="*, auto" style="padding: 10;" verticalAlignment="bottom">
                <TextField row="0" col="0" v-model="text" class="chatTextField"></TextField>
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
  separator-color: white;
}

.chatBox {
    background-color: white;
}

.chatTextField {
    padding: 5; 
    background-color: lightgray; 
    border-radius: 4;
}

Button {
    padding: 5;
    margin: 5;
    background-color: dodgerblue;
    color: white;
    height: 40;
    border-radius: 5;
}

</style>

