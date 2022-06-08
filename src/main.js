import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css';
import VueFingerFirective from 'vue-finger-directive'


Vue.config.productionTip = false;//阻止启动生产消息
Vue.use(VueFingerFirective);
new Vue({
  render: h => h(App),
}).$mount('#app')//手动挂载到id为app的dom中
