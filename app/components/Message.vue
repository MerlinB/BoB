<template>
	<GridLayout columns="*" rows="auto" :class="[{'me': sendByMe, 'them': !sendByMe}, 'msg']">
		<StackLayout orientation="horizontal" :horizontalAlignment="alignment">
			<Image :visibility="visibility" stretch="aspectFill" height="30" class="authorimg" width="30" verticalAlignment="top" style="background-color: black;"></Image>
			<Label :text="message.text" textWrap="true" class="msg_text" verticalAlignment="top"></Label>
		</StackLayout>
	</GridLayout>
</template>

<script>
export default {
    computed: {
        sendByMe() {
            return this.message.sender === 'me'
		},
		alignment() {
			if (this.sendByMe) {
				return 'right';
			} else {
				return 'left';
			}
		},
		visibility() {
			if (this.sendByMe) {
				return 'hidden';
			} else {
				return 'visible';
			}
		},
    },
    props: ['message']
};
</script>

<style scoped>
.msg {
    font-size: 14;
    padding: 5;
}

.me .msg_text {
    background-color: #30A9FF;
    color: white;
    padding: 8;
    margin-right: 10;
    border-radius: 5;
}

.them .msg_text {
    background-color: #e0e0e0;
    color: #333;
    padding: 7;
    border-radius: 5;
    margin-right: 40;
}

.authorimg {
    margin: 0 5 5 5;
    width: 30;
    height: 30;
    border-radius: 15;
}
</style>
