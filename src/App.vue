<template>
  <div class="app">
    <nav class="app-nav">
      <router-link to="/" exact>HOME</router-link>
      <router-link to="/posts">POSTS</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background: black;
}
.app-nav > a {
  text-decoration: none;
  color: ghostwhite;
}
.app-nav > a.router-link-active {
  background-color: ghostwhite;
  color: black;
}
</style>
