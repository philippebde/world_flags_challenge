<template>
  <div class="navbar">
    <h1>Where in the world?</h1>
    <button @click="isDarkMode = !isDarkMode"><i :class="icon" class="fa-moon"></i> {{labelMode}}</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      isDarkMode: true,
      icon: "far",
    }
  },
  computed:{
    labelMode(){
      if(this.isDarkMode){
        this.icon = 'fas';
        return 'Dark Mode';
      }else{
        this.icon = 'far';
        return 'Light Mode';
      }
    }
  }
}
</script>

<style lang="scss" src="./Navbar.scss"></style>