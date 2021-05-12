<template>
	<div class="wrapper">
		<h1>Weather Forecast </h1>
		<body class="intro">
			<ApiCall @forecast="forecastData = $event" @forecastError="forecastDataError = $event" />
		</body>
		<div v-if="forecastDataError">
			<ErrorHandling header="Error" content="It seems that this city name...is not really a city name. Please try again!"/>
		</div>
		<div v-else-if="forecastData">
			<h2 class="forecast-header">5-Day Forecast for {{ forecastData.city.name }}, {{ forecastData.city.country }}</h2>
			<div class="card-wrap">
				<WeatherData
					v-for="(dailyForecast, index) in filteredForecastData"
					v-bind="dailyForecast"
					:key="index"
				/>
			</div>
			<p class="credit">
				Weather api from <a href="https://openweathermap.org/">Open Weather Map</a>
			</p>
		</div>
		<div v-else>
			<ErrorHandling />
		</div>
	</div>
</template>

<script>
	import ApiCall from './components/ApiCall.vue';
	import ErrorHandling from './components/ErrorHandling.vue';
	import WeatherData from './components/WeatherData.vue';

	export default {
		components: {
			ErrorHandling,
			ApiCall,
			WeatherData
		},

		computed: {
			// API returns 40 total times across 5 days; we are only interested in one time per day, so return each 8th time
			filteredForecastData() {
				return this.forecastData.list.filter((v, i) => i % 8 === 0);
			}
		},

		data() {
			return {
				forecastData: null,
				forecastDataError: null
			}
		}
	};
</script>

<style lang="scss">
	@import "scss/main.scss";

	h2 {
		color: $secondary-text;
	}

	h2.forecast-header {
		border-top: 4px dotted #F9CFD7;
		color: $secondary-text;;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.intro {
		margin-bottom: 48px;
		
		h1 {
			background: $secondary-text;;
			border-radius: 8px;
			color: white;
			display: inline-block;
			font-size: 48px;
			margin-bottom: 0;
			margin-left: -8px;
			padding: 8px;
		}
	
		p {
			font-size: 48px;
			line-height: 1.2;
			margin-top: 24px;
		}
	}

	.credit {
		color: #f9f9ff;
		font-size: 12px;
		margin-top: 32px;
    	text-align: right;
	}

	// TODO: move these to scoped component files
	.wrapper {
		margin: 48px auto;
		max-width: $wrapper-width;
		padding: 0 48px;
	}

	.card-wrap {
		display: flex;
		justify-content: space-between;
	}
</style>
