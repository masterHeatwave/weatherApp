<template>
<span>
<div class="search-box">
        <input 
          type="text" 
		  id="search"
          class="search-bar" 
          placeholder="Type a city..."
		  :value="location"
          @input="lookupWeather"
        />
      </div>			
	</span>
</template>

<script>
	const _ = require("lodash");
	const axios = require("axios");

	export default {
		data() {
			return {
				apiKey: "b46668659c40d3e42d35ce2471f676e8",
				forecastData: null,
				forecastDataError: null,
				location: ""
			};
		},

		directives: {
			focus: {
				inserted: function(el) {
					el.focus();
				}
			}
		},

		methods: {
			lookupWeather: _.debounce(function(e) {
				let self = this;
				this.location = e.target.value;
				this.$emit("forecast", null);
				this.$emit("forecastError", null);
				if (e.target.value) {
					axios
						.get(
							"https://api.openweathermap.org/data/2.5/forecast?q=" +
								e.target.value +
								"&units=metric&APPID=" +
								self.apiKey
						)
						// .get('https://api.openweathermap.org/data/2.5/forecast?id=6542285&units=imperial&APPID=' + self.apiKey)
						// .get('http://localhost:8080/weather-data.json')
						.then(function(forecastData) {
							self.forecastData = forecastData.data;
							self.$emit("forecast", self.forecastData);
						})
						.catch(function(error) {
							self.forecastDataError = error;
							self.$emit("forecastError", self.forecastDataError);
						});
				}
			}, 500)
		}
	};
</script>

<style>

.search-box {
  width: 100%;
  text-align:center;
  margin-bottom: 30px;
  height: 45px;
  padding: 300px 20px 20px 15px;
  color: #313131;
  display: flex;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background: transparentize(white, 0.7);
  transition: 0.4s;
  transition: 250ms ease-in-out;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>