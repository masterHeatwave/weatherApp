import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import WeatherData from './WeatherData'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
    },
    {
      path: '/WeatherData',
      name: 'WeatherData',
      component: WeatherData,
      props: true,
    }
  ]
})