<template>
    <div>
        <div class="filters">
          <div class="search">
            <input type="search" name="search" v-model="search" aria-label="Search for a country..." placeholder="Search for a country..." />
            <i class="fas fa-search"></i>
          </div>
          <div class="region">
            <select name="region">
              <option value="all" selected>Filter by Region</option>            
              <option value="">Africa</option>            
            </select>
          </div>
        </div>
        <div class="blocks">
          
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      search: ""
    }
  }
}
</script>

<style scoped></style>