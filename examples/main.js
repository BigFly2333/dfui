import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DfUi from '../packages/index'
import './assets/style/reset.css'
import '../packages/theme-chalk/src/index.scss'
// console.log(DfUi)
Vue.use(DfUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
