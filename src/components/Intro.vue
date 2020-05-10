<template>
  <div class="intro">
    <input type="text" v-model="newAppName" placeholder="Enter new App name">
    <br>
    <button
      @click="updateAppName(newAppName)"
      :disabled="!newAppName || !newAppName.length"
    >Update App Name</button>
    <br>
    <h1>Welcome to {{ app }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Intro",
  data() {
    return {
      newAppName: ""
    };
  },
  computed: {
    ...mapGetters(["app"])
  },
  methods: {
    ...mapActions(["updateAppName"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: gainsboro;
  height: 75vh;
}
.intro > button {
  cursor: pointer;
  border: none;
  height: 30px;
  background: black;
  color: ghostwhite;
  text-transform: uppercase;
}
.intro > button[disabled] {
  background: lightgrey;
  cursor: not-allowed;
}
.intro > input {
  text-align: center;
  height: 25px;
}
</style>
