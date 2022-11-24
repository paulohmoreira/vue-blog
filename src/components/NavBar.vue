<template>
  <header :class="{ 'scrolled-nav': scrolledNav}">
    <nav class="nav-bar">
      <div class="logo">
        <router-link :to="{ name: 'home' }"><img src="../assets/images/logo-editor.svg" alt="Vue Blog"></router-link>
      </div>
      
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link class="link" v-if="$store.state.user" :to="{ name: 'blogdashboard' }">Dashboard</router-link></li>
        <li><router-link class="link" v-if="$store.state.user=== null" to="/Login">Login/Register</router-link></li>
        <button class="logout-btn" v-if="$store.state.user" @click="$store.dispatch('logout')">Sair</button>
      </ul>

      <div class="icon">
        <img @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}" src="../assets/icons/menu.svg" alt="Menu">
      </div>
      
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link class="link" v-if="$store.state.user" :to="{ name: 'blogdashboard' }">Dashboard</router-link></li>
          <li><router-link class="link" v-if="$store.state.user=== null" to="/Login">Login/Register</router-link></li>
          <button class="logout-btn mobile" v-if="$store.state.user" @click="$store.dispatch('logout')">Sair</button>
          <!-- <li></li> -->
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "navigation",
    data() {
      return {
        scrolledNav: null,
        mobile: true,
        mobileNav: null,
        windowWidth: null,
      };
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      updateScroll(){
        const scrollPosition = window.screenY;
        if (scrollPosition > 50) {
          this.scrolledNav = true;
          return
        }
        this.scrolledNav = false;
      },
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
          this.mobile = true;
          return
        }
        this.mobile = false;
        this.mobileNav = false;
      }
    },
  };
</script>

<style scoped>

  header {
    -webkit-box-shadow: 0px 0px 4px 0px #CCC;
    box-shadow: 0px 0px 4px 0px #CCC;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    z-index: 99;
    width: 100%;
    /* position: fixed; */
    transition: 0.5s ease all;
    color: #fff;
  }
  nav.nav-bar {
    display: flex;
    position: relative;
    flex-direction: row;
    padding: .75rem 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1140px) {
    nav.nav-bar {
      max-width: 1140px;
    }  
  }

  ul, .link, a, a:visited {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }

  li {
    text-transform: uppercase;
    padding: 0 1rem;
    margin-left: 1rem;
    text-align: left;
  }

  .link {
    font-size: .875rem;
    transition: 0.5s ease all;
    padding-bottom: .25rem;
    border-bottom: 1px solid transparent;
    
  }
  .link:hover {
    color: #00afea;
    border-color: #00afea;
  }

  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 200px;
    height: 50px;
    object-fit: cover;
    margin-left: -60px;
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 1.5rem;
    height: 100%;
    cursor: pointer;
    transition: 0.5s ease all;
  }

  .icon img {
    width: 32px;
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 60%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;
  }
  .dropdown-nav li {
    margin-left: 0;
    padding: 1rem 0;
  }
  @media screen and (min-width: 374.9px) {
    .dropdown-nav {
      width: 100%;
    }
    .dropdown-nav li {
    padding: 1rem;
  }  
  }
  .dropdown-nav li .link {
    color: #2c3e50;
  }

  .mobile-nav-enter-active, .mobile-nav-leave-active {
    transition: 1s ease all;
  }
  .mobile-nav-enter-from, .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .scrolled-nav {
    background-color: #2c3e50;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .scrolled-nav nav {
    padding: .5rem 0;
  }
  .scrolled-nav nav .logo {
    width: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  } 
  .logout-btn {
    background: transparent;
    color: rgb(0, 255, 157);
    border: none;
  }
  .logout-btn.mobile {
    padding: 1rem;
    margin-top: -32px;
    text-align: left;
  }
</style>