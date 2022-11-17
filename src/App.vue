<template>
  <Navigation />
  <div class="views">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/newpost">NewPost</router-link>
  </div>
  <router-view/>
  <FooterBar />
</template>

<script>
  import Navigation from '../src/components/NavBar.vue';
  import FooterBar from '../src/components/FooterBar.vue';

  export default {
    name: "app",
    components: { Navigation, FooterBar },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

footer {
  margin-top: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.views {
  padding: 30px;
}

.views a {
  font-weight: bold;
  color: #2c3e50;
}

.views a.router-link-exact-active {
  color: #42b983;
}
</style>
