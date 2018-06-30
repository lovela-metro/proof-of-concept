import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import vueBulmaComponents from 'vue-bulma-components'

Vue.use(vueBulmaComponents)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC13JVX4Fa8C2mqaI32QhxqSIONruM0z9A',
    libraries: 'places',
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
