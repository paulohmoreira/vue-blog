<template>
  <Navigation />
  <div class="views">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
  import Navigation from '../src/components/NavBar.vue';

  export default {
    name: "app",
    components: { Navigation },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
