<template>
	<div>
		<div class="filters">
			<router-link to="/" tag="button" class="btn">
				<i class="fas fa-arrow-left"></i>Back
			</router-link>
		</div>
		<div class="blocks country">
			<country-full-view
				:name="country.name"
				:native-name="country.nativeName"
				:flag="country.flag"
				:population="country.population"
				:region="country.region"
				:sub-region="country.subregion"
				:capital="country.capital"
				:top-level-domain="country.topLevelDomain"
				:currencies="country.currencies"
				:languages="country.languages"
				:border-countries="country.borders"
			></country-full-view>
		</div>
	</div>
</template>

<script>
import CountryFullView from "../../components/CountryFullView/CountryFullView";
export default {
	name: "Country",
	components: {
		"country-full-view": CountryFullView,
	},
	data() {
		return {
			country: {},
		};
	},
	created() {
		this.$http
			.get("https://restcountries.eu/rest/v2/name/" + this.$route.params.name.toLowerCase(), {
				params: { fullText: true },
			})
			.then(
				(response) => {
					this.country = response.body[0];
				},
				(response) => {
					if (response.status === 404) {
						this.country = {};
					}
				}
			);
	}
};
</script>

<style scoped></style>