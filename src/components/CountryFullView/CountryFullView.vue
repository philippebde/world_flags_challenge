<template>
	<div>
    <div class="left">
		  <div class="flag" :style="{'background-image':'url('+flag+')'}"></div>
    </div>
    <div class="right">
      <div class="info">
        <h2>{{ name }}</h2>
        <div>
          <span><strong>Native Name:</strong> {{ nativeName }}</span>
          <span><strong>Population:</strong> {{ populationRender }}</span>
          <span><strong>Region:</strong> {{ region }}</span>
          <span><strong>Sub Region:</strong> {{ subRegion }}</span>
          <span><strong>Capital:</strong> {{ capital }}</span>
        </div>
        <div>
            <span><strong>Top Level Domain:</strong> {{ topLevelDomain.toString() }}</span>
            <span><strong>currencies:</strong> {{ currenciesRender }}</span>
            <span><strong>Languages:</strong> {{ languagesRender }}</span>
        </div>
        <div class="inline" v-if="borderCountries.length > 0">
            <span class="inline align-top"><strong>Border Countries:</strong></span>
            <div class="inline">
              <template v-for="border in borderCountries">
                <router-link :to="{name:'Country', params: {code: border}}" class="btn" :key="border">{{border}}</router-link>
              </template>
            </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	name: "CountryFullView",
	props: {
		name: { type: String, default: "N/A" },
		nativeName: { type: String, default: "N/A" },
		flag: { type: String, default: "" },
		population: { type: Number, default: 0 },
		region: { type: String, default: "N/A" },
		subRegion: { type: String, default: "N/A" },
		capital: { type: String, default: "N/A" },
		topLevelDomain: { type: Array, default: Array },
		currencies: { type: Array, default: Array },
		languages: { type: Array, default: Array },
		borderCountries: { type: Array, default: Array },
	},
	computed: {
		populationRender() {
			return this.population.toLocaleString();
		},
		borderCountriesRender() {
			return this.borderCountries;
		},
		currenciesRender() {
			var output = [];
			this.currencies.forEach((el, index) => (output[index] = el.name));
			return output.join(", ");
		},
		languagesRender() {
			var output = [];
			this.languages.forEach((el, index) => (output[index] = el.name));
			return output.join(", ");
		},
	},
};
</script>

<style>
</style>