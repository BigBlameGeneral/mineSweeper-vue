import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css';

Vue.config.productionTip = false;//阻止启动生产消息

new Vue({
  render: h => h(App),
}).$mount('#app')//手动挂载到id为app的dom中
