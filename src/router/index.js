import Vue from 'vue'
import Router from 'vue-router'
import WeatherData from './WeatherData'
import About from './About'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/WeatherData',
      name: 'WeatherData',
      component: WeatherData,
      props: true,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      props: true,
    }
  ]
})