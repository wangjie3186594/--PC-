import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)

import './assets/css/base.css'
import './assets/mui/dist/css/mui.css'
import './assets/css/swiper.css'



// 后置首卫
// router.afterEach((to, next) => {
//   console.log('跳转成功')
//   // next()
// })

// 引入分页插件
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

// 导航首卫
router.beforeEach((to,from,next) => {
  // console.log(from)
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {
    
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
