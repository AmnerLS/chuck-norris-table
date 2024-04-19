<script>

import HeaderContent from "./public/header-content.component.vue";
import FooterContent from "./public/footer-content.component.vue";
import {NorrisApiService} from "./norris/services/norris-api.service.js";
import JokeTable from "./norris/components/joke-table.component.vue";
import {Joke} from "./norris/model/joke.entity.js";

export default {
  name: "app",
  components: {JokeTable, FooterContent, HeaderContent},
  data(){
    return {
      jokes:[],
      norrisApi: new NorrisApiService()
    }
  },
  created(){
    this.getJokes();
  },
  methods: {
    async buildJokes(categories){
      for (const category of categories) {
        const response = await this.norrisApi.getRandomJoke(category);
        this.jokes.push(new Joke(response.data.id, category, response.data.icon_url, response.data.value));
      }
    },
    async getJokes(){
      const response = await this.norrisApi.getCategories();
      const categories = response.data;
      console.log(categories);
      await this.buildJokes(categories);
      console.log(this.jokes[0]);
    }
  }
}
</script>

<template>
  <header-content/>
  <joke-table :jokes="jokes"/>
  <footer-content/>
</template>

<style scoped>

</style>
