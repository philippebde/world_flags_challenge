<template>
	<div>
		<div class="filters">
			<div class="search">
				<input
					type="search"
					name="search"
					@keyup="searchCountry(search)"
					v-model="search"
					aria-label="Search for a country..."
					placeholder="Search for a country..."
				/>
				<i class="fas fa-search"></i>
			</div>
			<div class="region">
				<span @click="showRegionList = !showRegionList" class="dropdown-toggle"
					>{{ labelRegion }}
					<i
						class="fas"
						:class="[showRegionList ? 'fa-angle-up' : 'fa-angle-down']"
					></i
				></span>
				<ul class="dropdown" v-show="showRegionList">
					<li v-if="resetAllRegions" @click="searchByRegion()">
						Filter By Region
					</li>
					<li
						v-for="(item, index) in regions"
						:key="index"
						@click="searchByRegion(item)"
					>
						{{ item }}
					</li>
				</ul>
			</div>
		</div>
		<div class="blocks">
			<template v-for="country in countries">
				<router-link
					:to="{ name: 'Country', params: { code: country.alpha3Code } }"
					class="block"
					:key="country.numericCode"
				>
					<country-details
						layout="teaser"
						:name="country.name"
						:flag="country.flag"
						:population="country.population"
						:capital="country.capital"
						:region="country.region"
					></country-details>
				</router-link>
			</template>
		</div>
	</div>
</template>

<script>
import CountryDetails from "../../components/CountryDetails/CountryDetails.vue";
export default {
	name: "Home",
	components: {
		"country-details": CountryDetails,
	},
	data() {
		return {
			search: "",
			showRegionList: false,
			resetAllRegions: false,
			labelRegion: "Filter by region",
			countries: {},
			regions: ["africa", "americas", "asia", "europe", "oceania"],
		};
	},
	created() {
		this.getAllCountries();
	},
	methods: {
		searchCountry(name) {
			if (name !== "") {
				this.$http.get("https://restcountries.eu/rest/v2/name/" + name).then(
					(response) => {
						this.countries = response.body;
					},
					(response) => {
						if (response.status === 404) {
							this.countries = {};
						}
					}
				);
			} else {
				this.getAllCountries();
			}
		},
		searchByRegion(name) {
			if (name !== undefined) {
				this.showRegionList = !this.showRegionList;
				this.labelRegion = name;
				this.resetAllRegions = true;
				this.$http.get("https://restcountries.eu/rest/v2/region/" + name).then(
					(response) => {
						this.countries = response.body;
					},
					(response) => {
						if (response.status === 404) {
							this.countries = {};
						}
					}
				);
			} else {
				this.showRegionList = !this.showRegionList;
				this.labelRegion = "Filter by region";
				this.resetAllRegions = false;
				this.getAllCountries();
			}
		},
		getAllCountries() {
			this.$http.get("https://restcountries.eu/rest/v2/all").then(
				(response) => {
					this.countries = response.body;
				},
				(response) => {
					if (response.status === 404) {
						this.countries = {};
					}
				}
			);
		},
	},
};
</script>

<style scoped></style>