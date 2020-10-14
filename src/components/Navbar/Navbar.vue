<template>
  <div class="navbar">
    <router-link to="/"><h1>Where in the world?</h1></router-link>
    <button @click="changeThemeMode"><i :class="icon" class="fa-moon"></i> {{labelMode}}</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      darkMode: false,
      icon: "far",
    }
  },
  methods: {
    changeThemeMode(){
      this.darkMode = !this.darkMode;
      this.$emit('themeModeChanged',this.darkMode);
    }
  },
  computed:{
    labelMode(){
      if(this.darkMode){
        this.icon = 'far';
        return 'Light Mode';
      }else{
        this.icon = 'fas';
        return 'Dark Mode';
      }
    }
  },
}
</script>

<style scoped></style>