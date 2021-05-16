<template>
	<article class="weather-card" :class="formattedType">
		<div class="weather-card__inner">
			<div class="weather-conditions">
				<span class="weather-type">{{ weather[0].main }}</span>
				<span class="weather-temp">{{ formattedTemp }}&deg;</span>
			</div>
			<div class="weather-meta">
				<header>
					<span class="weather-day">{{ formattedDay }}</span>
					<h1>{{ formattedMonth }} {{ formattedDate }}</h1>
				</header>
                <dl>
                    <div title="Cloud Cover">
                        <dt class="clouds">Cloud Cover</dt>
                        <dd>{{ clouds.all }}%</dd>
                    </div>
                    <div title="Wind speed and direction">
                        <dt class="wind">Wind</dt>
                        <dd>{{ formattedWindSpeed }} mph / {{ formattedWindDirection }}&deg;</dd>
                    </div>
                    <div title="Humidity">
                        <dt class="humidity">Humidity</dt>
                        <dd>{{ main.humidity }}%</dd>
                    </div>
                </dl>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		computed: {
			formattedDate() {
				return this.dateTime.getDate();
			},

			formattedDay() {
				return new Date().getDay() === this.dateTime.getDay()
					? "Today"
					: this.dateTime.toLocaleString("default", { weekday: "short" });
			},

			formattedMonth() {
				return this.dateTime.toLocaleString("default", { month: "long" });
			},

			formattedTemp() {
				return Math.round(this.main.temp);
			},

			formattedType() {
				return "weather-data--" + this.weather[0].main.toLowerCase();
            },

            formattedWindDirection() {
                // TODO: map to direction
                return Math.round(this.wind.deg);
            },
            
            formattedWindSpeed() {
                return this.wind.speed.toFixed(1);
            }
		},

		data() {
			return {
				dateTime: new Date(this.dt * 1000)
			};
		},

		props: {
			clouds: Object,
			dt: {
                type: Number,
                required: true
			},
			main: {
                type: Object,
                required: true
			},
			weather: {
                type: Array,
                required: true
            },
            wind: Object
		}
	};
</script>

<style lang="scss" scoped>
    @mixin gradient($opacity) {
        background: -moz-linear-gradient(
            top,
            rgba(0, 0, 0, $opacity) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        background: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, $opacity) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, $opacity) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
    dl,
    dd {
        margin: 0;
    }

    dl {
        display: flex;
        flex-direction: column;

        div {
            line-height: 24px;
            margin-bottom: 4px;
        }
    }

    dd {
        color: #B4B4B6;
        padding-left: 36px;
    }

    dt {
        background-repeat: no-repeat !important;
        background-position: center left !important;
        color: #c53c55;
        line-height: 24px;
        padding-left: 36px;
        width: 100%;

        &.clouds {
            background: url('../assets/cloud.svg');
        }
    
        &.humidity {
            background: url('../assets/droplet.svg');
        }
    
        &.wind {
            background: url('../assets/wind.svg');
        }
    }

	h1 {
        font-size: 24px;
		margin-top: 8px;
	}

	header {
		position: relative;
	}

	.weather-card {
		max-width: 1440px;
		background-position: top center !important;
		border-radius: 8px;
		box-shadow: 2px 2px 8px transparentize(black, 0.9);
		overflow: hidden;
		position: relative;
		width: 19%;

		&:before {
            @include gradient(0.35);
			bottom: 0;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}

        &--clear {
            // Unsplash: https://unsplash.com/photos/I8lKrHE3p7k
            background: url("../assets/weather/clear.jpg");
        }

		&--clouds {
			// Unsplash: https://unsplash.com/photos/4C6Rp23RjnE
			background: url("../assets/weather/clouds.jpg");
		}

		&--rain {
			// Unsplash: https://unsplash.com/photos/1YHXFeOYpN0
            background: url("../assets/weather/rain.jpg");
            
            &:before {
                @include gradient(0.65);
            }
        }
        
        &--snow {
            // Unsplash: https://unsplash.com/photos/5AiWn2U10cw
            background: url("../assets/weather/snow.jpg");   
        }

		&__inner {
			position: relative;
		}
	}

	.weather-conditions {
		color: white;
		height: 288px;
        padding: 24px;
        text-shadow: 1px 1px 4px transparentize(black, 0.65);
	}

	.weather-day {
		font-size: 12px;
		letter-spacing: 2px;
		opacity: 0.35;
		text-transform: uppercase;
	}

	.weather-meta {
		background: white;
		padding: 24px;
		position: relative;

		&:after,
		&:before {
			background: white;
			content: "";
			height: 32px;
			left: -4px;
			position: absolute;
			right: -4px;
			top: -16px;
			transform: rotate(-6deg);
		}

		&:after {
            background: transparentize($color: white, $amount: 0.5);
			border-top-right-radius: 2px;
			right: 24px;
			top: -24px;
		}
	}

	.weather-temp {
		display: block;
		font-size: 48px;
	}

	.weather-type {
		display: block;
        font-size: 18px;
		margin-bottom: 6px;
        opacity: 0.7;
	}
</style>
