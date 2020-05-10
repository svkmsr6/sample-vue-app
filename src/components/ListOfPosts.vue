<template>
  <div class="app-posts">
    <Loader :show="loading"/>
    <ul v-if="!loading">
      <li class="post" v-for="(post, key) in posts" :key="key">
        <h4>{{ post.title }}</h4>
        <hr>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loader from "@/components/Loader";
export default {
  name: "ListOfPosts",
  components: { Loader },
  computed: {
    ...mapGetters(["posts", "loading"])
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  mounted(){
    this.fetchPosts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  background: lightgrey;
  margin: 10px;
  width: 95%;
}
li > h4 {
  text-transform: uppercase;
}

li > p {
  text-transform: capitalize;
  margin: 10px;
}
</style>
