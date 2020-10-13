<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="header">
        <app-navbar @themeModeChanged="darkMode = $event"></app-navbar>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar/Navbar.vue'
export default {
  name: 'app',
  data(){
    return {
      darkMode: false
    }
  },
  components:{
    'app-navbar': AppNavbar
  },
  mounted(){
    document.body.classList.add("app-bg");
    document.documentElement.setAttribute('theme','light');
  },
  watch: {
    darkMode: function(){
      if(this.darkMode){
        document.documentElement.setAttribute('theme','dark');
      }else{
        document.documentElement.setAttribute('theme','light');
      }
    }
  }
}
</script>

<style lang="scss" src="./styles/theme.scss"></style>
