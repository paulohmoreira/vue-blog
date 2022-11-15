<template>
  <header>
    <nav class="nav-bar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">Vue Blog</router-link>
      </div>

      <div class="links">
        <ul>
          <router-link to="#">Home</router-link>
          <router-link to="#">Dashboard</router-link>
          <router-link to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <img src="../assets/icons/menu.svg" alt="Menu">
  </header>
</template>

<script>
  export default {}
</script>

<style lang="css">
  
</style>