<template>
  <Navigation />
  <router-view/>
  <FooterBar />
</template>

<script>
  import Navigation from '../src/components/NavBar.vue';
  import FooterBar from '../src/components/FooterBar.vue';
  import { onBeforeMount  } from 'vue';
  import { useStore } from 'vuex';

  export default {
    // Redirects the user to the correct page if its refresh the page
    setup() {
      const store = useStore()

      onBeforeMount(() => {
        store.dispatch('fetchUser')
      })
    },
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
