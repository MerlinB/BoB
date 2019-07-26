<template>
    <ScrollView>
        <ListView for="conversation in conversations" class="list-group" @itemTap="onItemTap">
            <v-template>
                <GridLayout class="list-group-item" rows="*" columns="auto, *">
                    <Image row="0" col="0" :src="conversation.src" class="thumb img-circle" />
                    <Label row="0" col="1" :text="conversation.text" />
                </GridLayout>
            </v-template>
        </ListView>
    </ScrollView>
</template>

<script>
import conversation from "./Conversation";

export default {
  data() {
    return {
      conversations: [
        { text: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
        { text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
        { text: "Venusaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
        { text: "Charmander", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
        { text: "Charmeleon", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
        { text: "Charizard", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
        { text: "Squirtle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
        { text: "Wartortle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
        { text: "Blastoise", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
        { text: "Caterpie", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
        { text: "Metapod", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
        { text: "Butterfree", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
        { text: "Weedle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
        { text: "Kakuna", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
        { text: "Beedrill", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" }
      ]
   }
  },
  methods: {
    onItemTap: function(event) {
        this.$navigateTo(conversation, {
            transition: {name: 'slide'} , 
            props: {
                'conversation': this.$data.conversations[event.index]
            }
        });
        }
  },
};
</script>
