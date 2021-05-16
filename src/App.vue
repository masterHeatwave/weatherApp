<template>
<div class="header">
   <h1 class="header__title">World Weather Forecast</h1>
   <aside class="menu" @click="toggleNav" v-bind:class="{ 'isActive':isActive }">
        <div class="nav-container">
          <div class="top">
            <a href="/">
              <div class="media">
                <div class="media-content">
                  <div class="content">
                    <span>Your best weather app</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <hr class="menu-items">

          <div class="bottom">
           <a href="#">About</a>
            <a href="#">How It Works</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </aside>

      <button class="humburger" @click="toggleNav" v-bind:class="{ 'isActive':isActive }">
        <span></span>
      </button>


    <router-view />
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
		<div class="footer" id="root">
  			<footer-style></footer-style>
		</div>
	</div>
</template>



<script>
	import ApiCall from './components/ApiCall.vue';
	import ErrorHandling from './components/ErrorHandling.vue';
	import WeatherData from './components/WeatherData.vue';
	import About from './components/About.vue';

	export default {
		components: {
			ApiCall,
			ErrorHandling,
			WeatherData,
			About
		},
		methods: {
			toggleNav: function() {
      		this.isActive = !this.isActive;
    }
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
				forecastDataError: null,
				isActive: false,
      			city: ''
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
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  }

body {
   background-color: #e4e9ed;
   font-family: 'Courier New, sans-serif';
}

.app{  
	height: 100vh;
	background-color: #0ddfbf;
}
.menu{
  position: absolute;
  background: #844abb;
  width: 300px;
  left: -300px;
  z-index: 9;
  transition: .4s ease-in-out;
  bottom: 0;
  top: 0;
}
.isActive{
  left: 0;
}
.humburger{
  position: relative;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-left: 10px;
  float: left;
  outline: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 9;
}
.humburger span{
  position: absolute;
  background-color: #8c56be;
  width: 30px;
  height: 2px;
  left: 0;
  margin-left: 8px;
}
.humburger span:before{
  position: absolute;
  content: '';
  height: 2px;
  background-color: #8c56be;
  width: 100%;
  top: -13px;
  left: 0;
  transition: .4s;
}
.humburger span:after{
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background-color: #8c56be;
  top: 12px;
  left: 0;
  transition: .4s;
}
.humburger.isActive span{
  background-color: transparent;
  transition: .4s;
}

  .top{
      width: 120px;
      font-size: 32px;
      color: #fff;
      margin-top: 160px;
      margin-left: 25px;
      margin-bottom: 90px;
    a{
        color: #fff;
	}
}
.top{
  a:hover{
    color: #00ebc7
	}
}
.bottom{
  a{
	font-size: 32px;
    display: table;
    margin-left: 24px;
    color: #00D1B2;
  }
}
.menu-items{
  width: 70px;
  margin-left: 24px;
  height: 4px;
  border-radius: 4px;
  background-color: #00ebc7;
}
.sun{
	font-size: 70px;
	text-align: center;
  	color: #8a39d6;
	text-shadow: white 2px;
  	padding-top: 20px;
  	padding-left: 50px;
	padding-right: 50px;
}
.button{
  	padding: 4px;
	padding-top: 2px;
  	position: absolute;
  	right: 10px;
  	top: 140px;
}
.fa {
		font-size: 20px;
		position: right;
}
	h1{
		text-align: center;
		color: rgb(20, 20, 20);
		font-family: 'Quattrocento';
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
