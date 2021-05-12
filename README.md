# Weather Forecast Widget

This simple Vue.js app pulls weather data from the [Open Weather Map API](https://openweathermap.org/api) and shows a five day weather forecast for a user-entered city.

## Installation

1. Open your terminal and navigate to the app's root folder. 
2. If needed, modify the `vue.config.js` file to set your **publicPath**. In most cases, you can leave this as the default `/`, which assumes this app will be running in the root directory of your server. More information in the [Vue CLI docs](https://cli.vuejs.org/config/#publicpath).
3. Type `npm run build`
4. Upload the **dist** folder to your web server
5. Enter the appropriate URL and the app should load.

The app is available for preview on [my personal website](https://www.ryanburney.com/projects/wipro-weather-widget).

## Thought Process

I wanted to create a simple and intuitive widget that got right down to business: showing the weather for a given city. I kept visual elements to a minimum and used colorful photography to highlight the individual weather tiles. I figured photos were a more interesting way to communicate the weather (vs. an icon).

## Tradeoffs / If I Had More Time

Given more time, I would love to update the app to do the following:

* Highlight the current date more prominently
* Show hourly forecasts for each day in addition to cloud cover, wind speed, and humidity
* Allow showing temps in Celsius
* Find quality illustrations instead of photography for a more consistent UI
* Expand/contract the city input box to accommodate user input

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
