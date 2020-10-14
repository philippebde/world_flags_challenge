<template>
	<div>
		<div class="flag" :style="{'background-image':'url('+flag+')'}"></div>
		<div class="info">
			<h2>{{ name }}</h2>
			<span><strong>Population:</strong> {{ populationRender }}</span>
			<span><strong>Region:</strong> {{ region }}</span>
			<span><strong>Capital:</strong> {{ capital }}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: "CountryTeaser",
  props: {
    name: {type: String, default: "N/A"},
    flag: {type: String, default: ""},
    population: {type: Number, default: 0},
    region: {type: String, default: "N/A"},
    capital: {type: String, default: "N/A"}
  },
  computed:{
    populationRender(){
      return this.population.toLocaleString();
    }
  }
};
</script>

<style>
</style>