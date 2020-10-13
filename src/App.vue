<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar/Navbar.vue'
export default {
  name: 'app',
  components:{
    'app-navbar': AppNavbar
  }
}
</script>

<style lang="scss" src="./styles/theme.scss"></style>
