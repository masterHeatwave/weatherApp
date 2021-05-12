<template>
<<<<<<< HEAD
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
=======
	<div class="wrapper">
		<h1>Weather Forecast </h1>
		<body class="intro">
			<ApiCall @forecast="forecastData = $event" @forecastError="forecastDataError = $event" />
		</body>
		<div v-if="forecastDataError">
			<ErrorHandling header="Error" content="It seems that this city name...is not really a city name. Please try again!"/>
>>>>>>> improve-styling
		</div>
		<div v-else-if="forecastData">
			<h2 class="forecast-header">5-Day Forecast for {{ forecastData.city.name }}, {{ forecastData.city.country }}</h2>
			<div class="card-wrap">
				<WeatherData
					v-for="(dailyForecast, index) in filteredForecastData"
					v-bind="dailyForecast"
					:key="index"
				/>
<<<<<<< HEAD
				
			</div>
=======
			</div>
			<p class="credit">
				Weather api from <a href="https://openweathermap.org/">Open Weather Map</a>
			</p>
>>>>>>> improve-styling
		</div>
		<div v-else>
			<ErrorHandling />
		</div>
<<<<<<< HEAD
		</div>
=======
>>>>>>> improve-styling
	</div>
</template>

<script>
	import ApiCall from './components/ApiCall.vue';
	import ErrorHandling from './components/ErrorHandling.vue';
	import WeatherData from './components/WeatherData.vue';

	export default {
		components: {
<<<<<<< HEAD
			ApiCall,
			ErrorHandling,
=======
			ErrorHandling,
			ApiCall,
>>>>>>> improve-styling
			WeatherData
		},

		computed: {
<<<<<<< HEAD
			// API returns data 40 times within 5 days, we only need one time per day, so we divide 40 by 5 (== 8 times)
=======
			// API returns 40 total times across 5 days; we are only interested in one time per day, so return each 8th time
>>>>>>> improve-styling
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
<<<<<<< HEAD
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
=======
	@import "scss/main.scss";

	h2 {
		color: $secondary-text;
>>>>>>> improve-styling
	}

	h2.forecast-header {
		border-top: 4px dotted #F9CFD7;
<<<<<<< HEAD
		color:  rgb(180, 38, 38);;
=======
		color: $secondary-text;;
>>>>>>> improve-styling
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.intro {
		margin-bottom: 48px;
		
		h1 {
<<<<<<< HEAD
			background:  rgb(180, 38, 38);
			border-radius: 8px;
			outline-color: crimson;
=======
			background: $secondary-text;;
			border-radius: 8px;
>>>>>>> improve-styling
			color: white;
			display: inline-block;
			font-size: 48px;
			margin-bottom: 0;
			margin-left: -8px;
			padding: 8px;
		}
<<<<<<< HEAD
=======
	
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
>>>>>>> improve-styling
	}

	// TODO: move these to scoped component files
	.wrapper {
		margin: 48px auto;
<<<<<<< HEAD
		max-width: 1400px;
=======
		max-width: $wrapper-width;
>>>>>>> improve-styling
		padding: 0 48px;
	}

	.card-wrap {
		display: flex;
		justify-content: space-between;
	}
</style>
