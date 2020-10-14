<template>
	<div>
		<div class="filters">
			<div class="search">
				<input
					type="search"
					name="search"
					@keyup.enter="searchCountry(search)"
					v-model="search"
					aria-label="Search for a country..."
					placeholder="Search for a country..."
				/>
				<i class="fas fa-search"></i>
			</div>
			<div class="region">
				<select
					name="region"
					@change="searchPerRegion(region)"
					v-model="region"
				>
					<option value="" selected>Filter by Region</option>
					<option v-for="(item, index) in regions" :key="index" :value="item">
						{{ item | capitalize }}
					</option>
				</select>
			</div>
		</div>
		<div class="blocks">
			<template v-for="country in countries">
				<router-link :to="{name:'Country', params: {name: country.name}}" class="block" :key="country.numericCode">
          <country-teaser-view
            :name="country.name"
            :flag="country.flag"
            :population="country.population"
            :capital="country.capital"
            :region="country.region"
          ></country-teaser-view>
        </router-link>
			</template>
		</div>
	</div>
</template>

<script>
import CountryTeaserView from "../../components/CountryTeaserView/CountryTeaserView";
export default {
	name: "Home",
	components: {
		"country-teaser-view": CountryTeaserView,
	},
	data() {
		return {
			search: "",
			region: "",
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
		searchPerRegion(name) {
			if (name !== "") {
				this.$http.get("https://restcountries.eu/rest/v2/region/" + name).then(
					(response) => {
						this.countries = response.body;
					},
					(response) => {
						console.log(response);
					}
				);
			} else {
				this.getAllCountries();
			}
		},
		getAllCountries() {
			this.$http.get("https://restcountries.eu/rest/v2/all").then(
				(response) => {
					this.countries = response.body;
				},
				(response) => {
					console.log(response);
				}
			);
		},
	},
};
</script>

<style scoped></style>