<template>
    <Label :text="message.text" :class="[{'me': sendByMe}, 'message', 'speech-bubble']" textWrap="true"></Label>
</template>

<script>
export default {
    computed: {
        'sendByMe': function() {
            return this.message.sender === 'me'
        }
    },
    props: ['message']
};
</script>

<style scoped>

.message {
    padding: 10;
}

.me {
    text-align: right;
}

.speech-bubble {
	position: relative;
	background: #dbdbdb;
	border-radius: .4em;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 12px solid transparent;
	border-right-color: #dbdbdb;
	border-left: 0;
	margin-top: -12px;
	margin-left: -12px;
}

</style>
