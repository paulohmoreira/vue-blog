<template>
   <footer class="p-3">
    <div class="footer-container d-flex justify-content-between align-items-center">
      <router-link class="link-light text-decoration-none"  :to="{ name: 'home' }"><img class="logo" src="../assets/images/logo-editor.svg" alt="Vue Blog"></router-link>
      <div>
        <ul class="list-unstyled text-start small">
          <li class="links"> 
            <a href="https://www.linkedin.com/in/pauloh-moreira/" target="_blank" class="text-decoration-none text-white"><img src="../assets/icons/icons8-linkedin.svg" alt="LinkedIn" width="24"> Paulo Moreira</a>
          </li>
          <li class="links">
            <a href="https://www.linkedin.com/in/alex-cavalcanti/" target="_blank" class="text-decoration-none text-white"><img src="../assets/icons/icons8-linkedin.svg" alt="LinkedIn" width="24"> Alexandre Cavalcanti</a>
          </li>
        </ul>
      </div>

      <div>
        <ul class="link-menu list-unstyled d-flex flex-column text-start text-uppercase small">
          <router-link class="text-decoration-none text-white" :to="{ name: 'home' }">Home</router-link>
          <router-link class="text-decoration-none text-white" v-if="$store.state.user" :to="{ name: 'blogdashboard' }">Dashboard</router-link>
          <router-link class="text-decoration-none text-white" v-if="$store.state.user=== null" to="/Login">Login/Register</router-link>
        </ul>
      </div>
      
    </div>
    <div>
      <p class="text-white small">Copyright 2022 All Rights Reserved</p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "footer-vue",
  }
</script>
<style scoped>

  footer {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .footer-container {
    width: 90%;
    margin: 0 auto;
  }

  img.logo {
    width: 200px;
    height: 50px;
    object-fit: cover;
    margin-left: -60px;
  }

  @media screen and (max-width: 576px){
    .footer-container {
      flex-direction: column;
      gap: 2rem;
    }
    ul.link-menu {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1140px) {
    .footer-container {
      max-width: 1140px;
    }  
  }
</style>