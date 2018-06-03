### References
+ https://www.npmjs.com/package/vue2-google-maps
+ https://alligator.io/vuejs/vue-google-maps/  
+ https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489  
+ https://youtu.be/RbFNihP7H7I

---

### Create a vue project  
    + $ `vue create project_name`

---

### Change directories into your new project  
    + $ `cd project_name`

---

### $ `npm install vue2-google-maps --save`

---

### Get a key from Google Maps
    + https://console.developers.google.com/apis
    + On the left of the page, Click on Credentials - API Key (the key icon)
    + This will give you your API Key
    + It should look something like this: `AWzaSyC13JVX4Fa8C2mqaI42QhxqSIONruP0z9A`

---

### Update your `main.js` file to look like this:

#### main.js
```js
import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AWzaSyC13JVX4Fa8C2mqaI42QhxqSIONruP0z9A', /* this numer is your key from Google you just got */
    libraries: 'places',
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
```

---

###  Add this to your `App.vue` file

#### App.vue
```vue
<template>
  <div id="app">

    <div ref="vgmap">
    <gmap-map class="google-map"
      :center="center"
      :zoom="inzoom">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
      ></gmap-marker>
    </gmap-map>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'app',
    mounted: function() {
      this.geolocation()
    },
    data () {
      return {
        inzoom : 15,
        center: {lat: 10.0, lng: 10.0},
        markers: [],
/*        markersx: [
         {position: {lat: 10.0, lng: 10.0}},
         {position: {lat: 11.0, lng: 11.0}}
        ]*/
      }
    },
    methods: {
      geolocation() {

        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          var myPosition = {position: { lat: position.coords.latitude,
                              lng: position.coords.longitude,}};
          this.markers.push(myPosition);
          console.log(myPosition);
          console.log(this.markers);
        });

     }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .google-map {
    width: 700px;
    height: 400px;
    margin: 0 auto;
    background: gray;
  }

  .button {
     display: inline-block;
     margin: -4px;
  }

</style>

```

---

### To view your project in your browser
$ `npm run serve`

---

### Next LoveLA meeting
+ June 9th
+ June 30th

