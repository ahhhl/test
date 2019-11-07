import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/amfe-flexible/index'
import store from './store'
import 'view-design/dist/styles/iview.css';
import '@/assets/css/iview.css'
import './mock/mock'
import {Input,Button,Message} from 'view-design'
Vue.component('Input', Input)
Vue.component('Button', Button)

Vue.prototype.$message=Message
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
