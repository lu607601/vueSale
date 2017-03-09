// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import Index from './pages/index'
import Detail from './pages/detail'
import DataStatis from './pages/detail/dataStatis'
import Forecast from './pages/detail/forecast'
import Analysis from './pages/detail/analysis'
import Publish from './pages/detail/publish'

Vue.use(VueRouter)

Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/detail',
      component: Detail,
      redirect: '/detail/dataStatis',
      children: [
        {
          path: 'dataStatis',
          component: DataStatis
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
