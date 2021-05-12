<template>
<div class="header">
	<h1> 5-Day Forecast App </h1>
	<div class="wrapper">
		<body class="intro">
			<ApiCall @forecast="forecastData = $event" @forecastError="forecastDataError = $event" />
		</body>
    <div class="column is-one-quarters custom-title">
             <button class="button fav-button is-pulled-right" name="button">
               <span> Add to favorites
                 <i class="fa fa-heart-o" aria-hidden="true"></i>
               </span>
             </button>
          </div>
		<div v-if="forecastDataError">
			<ErrorHandling header="Error" content="This city name doesn't exist. Please try again!"/>
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
		</div>
		<div v-else>
			<ErrorHandling />
		</div>
		</div>
	</div>
</template>

<script>
	import ApiCall from './components/ApiCall.vue';
	import ErrorHandling from './components/ErrorHandling.vue';
	import WeatherData from './components/WeatherData.vue';

	export default {
		components: {
			ApiCall,
			ErrorHandling,
			WeatherData
		},

		computed: {
			// API returns data 40 times within 5 days, we only need one time per day, so we divide 40 by 5 (== 8 times)
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
	@import "assets/scss/main.scss";


	h1{
		text-align: center;
		color: rgb(20, 20, 20);
		font-family: 'Courier New', Courier, monospace;
		font-size:  45px;
		padding: 20px;
		text-shadow: 3px 3px 6px rgb(206, 198, 198);
		box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  		background: transparentize(white, 0.9);
	}

	h2 {
		color: rgb(180, 38, 38);
	}

	h2.forecast-header {
		border-top: 4px dotted #F9CFD7;
		color:  rgb(180, 38, 38);;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.intro {
		margin-bottom: 48px;
		
		h1 {
			background:  rgb(180, 38, 38);
			border-radius: 8px;
			outline-color: crimson;
			color: white;
			display: inline-block;
			font-size: 48px;
			margin-bottom: 0;
			margin-left: -8px;
			padding: 8px;
		}
	}

	// TODO: move these to scoped component files
	.wrapper {
		margin: 48px auto;
		max-width: 1400px;
		padding: 0 48px;
	}

	.card-wrap {
		display: flex;
		justify-content: space-between;
	}
</style>
