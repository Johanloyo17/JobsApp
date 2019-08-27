import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'

//Stylus
import './styles/main.scss'

//Element UI
import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
