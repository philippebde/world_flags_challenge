<template>
	<div>
		<div class="left">
			<div
				class="flag"
				:style="{ 'background-image': 'url(' + flag + ')' }"
			></div>
		</div>
		<div class="right">
			<div class="info">
				<h2>{{ name }}</h2>
				<div class="flex w-100">
					<template v-if="layout !== 'full'">
						<div class="block">
							<span><strong>Population:</strong> {{ populationRender }}</span>
							<span><strong>Region:</strong> {{ region }}</span>
							<span><strong>Capital:</strong> {{ capital }}</span>
						</div>
					</template>
					<template v-else>
						<div class="block">
							<span><strong>Native Name:</strong> {{ nativeName }}</span>
							<span><strong>Population:</strong> {{ populationRender }}</span>
							<span><strong>Region:</strong> {{ region }}</span>
							<span><strong>Sub Region:</strong> {{ subRegion }}</span>
							<span><strong>Capital:</strong> {{ capital }}</span>
						</div>
						<div class="block">
							<span
								><strong>Top Level Domain:</strong>
								{{ topLevelDomain.toString() }}</span
							>
							<span><strong>Currencies:</strong> {{ languagesRender }}</span>
						</div>
						<div class="w-100" v-if="borderCountries.length > 0">
							<span class="inline align-top"
								><strong>Border Countries:</strong></span
							>
							<div class="inline">
								<template v-for="border in borderCountries">
									<router-link
										:to="{ name: 'Country', params: { code: border } }"
										class="btn"
										:key="border"
										>{{ border }}</router-link>
								</template>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CountryDetails",
	props: {
		layout: { type: String, default: "full" },
		name: { type: String },
		nativeName: { type: String },
		flag: { type: String, default: "/src/assets/transparent.png"},
		population: { type: Number, default: 0 },
		region: { type: String },
		subRegion: { type: String },
		capital: { type: String },
		topLevelDomain: { type: Array, default: Array },
		currencies: { type: Array, default: Array },
		languages: { type: Array, default: Array },
		borderCountries: { type: Array, default: Array },
	},
	computed: {
		populationRender() {
			return this.population.toLocaleString();
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