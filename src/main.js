import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 3000,
  position: 'top-right', // ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
  theme: 'toasted-primary', // ['toasted-primary', 'outline', 'bubble']
  iconPack: 'material', // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
  type: 'default', // ['success', 'info', 'error']
  action : {
    text : 'CLOSE',
    onClick : (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
})



Vue.config.productionTip = false
AOS.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
