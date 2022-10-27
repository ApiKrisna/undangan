import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



Vue.config.productionTip = false
AOS.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
