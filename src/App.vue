<template>
<div class="header">
   <h1 class="header__title">World Weather Forecast App</h1>
   <div class="sun">
            <i class="wi wi-day-sunny sun is-pulled-right"></i>
          </div>
	<div class="wrapper">
		<body class="intro">
			<ApiCall @forecast="forecastData = $event" @forecastError="forecastDataError = $event" />
		</body>
    <div class="column is-one-quarters custom-title">
             <button class="button fav-button is-pulled-right" id="heart-button" name="button">
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
	@import "assets/scss/main.scss";

header {
	background-color: transparentize(black, 0.9);
}
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
}

body {
   background-color: #e4e9ed;
   font-family: 'Courier New, sans-serif';
}

.app{  height: 100vh;
	background-color: #00D1B2;
}
  
.sun{
	font-size: 70px;
  	color: #8a39d6;
  	padding-top: 10px;
  	padding-left: 10px;;
}
.button{
  	padding: 4px;
	padding-top: 2px;
  	position: absolute;
  	right: 10px;
  	top: 120px;
}
.fa {
		font-size: 20px;
		position: right;
}
	h1{
		text-align: center;
		color: rgb(20, 20, 20);
		font-family: 'Quattrocento, sans-serif';
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
		padding: 0 48px;
	}

	.card-wrap {
		display: flex;
		justify-content: space-between;
	}
</style>
