import Vue from 'vue'
import Router from 'vue-router'
import WeatherData from './WeatherData'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/WeatherData',
      name: 'WeatherData',
      component: WeatherData,
      props: true,
    }
  ]
})