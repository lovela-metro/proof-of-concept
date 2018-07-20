## Proof of Concept
Getting geo-location to work in Vue 

---

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
    key: 'USE OWN GOOGLE MAP API KEY', /* this numer is your key from Google you just got */
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

## June 9 2018

some ideas on how we can make the traveling route to work  
http://geekonjava.blogspot.com/2016/05/demo-animated-moving-marker-on-google.html

## Rails back end 

1. Create API Rest end point 
    `GET` to retrieve GPS points to draw markers on Gmap vue  
	JSON Object should look like:  
	`{position: {lat: 10.0, lng: 10.0}}`
	
2. Create on the db backend a table of gps points with lat and long entries 

3. Let's focus on one of the metro lines , maybe the red line? 
     - Do we have a pic of every station along the route? 
     - Do we have the gps locations of every station? 
     - We will need a table on our end to keep that info 
	 
## Vue side 

Implement Axios ( http resources on the current code )  
    to use the Rails backend API 
	
---

## June 30 2018

## Add Mongo Server

+ Linux - https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu/
+ Mac - $ `brew install mongodb` or $ `brew upgrade mongodb`
+ Windows - 

### Open on http://localhost:27017/

### After you get mongodb installed  
+ start the mongodb server: $ `mongod`
+ open the command prompt: $ `mongo`
+ create a database: $ `use <dbname>`

### Then you can insert records using `db` commands:

**Example: The $ `db.stations.insertMany` plus the JSON block that follows**

```js
db.stations.insertMany(
[
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Anaheim Street Station",
    "latitude": 33.7818299,
    "longitude": -118.18938
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Pacific Coast Hwy Station",
    "latitude": 33.7890899,
    "longitude": -118.18938
  }
]);
```

### Additional helpful links
+ https://ademirgabardo.wordpress.com/2016/02/02/installing-and-running-mongodb-on-mac-osx-for-beginners/
+ https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm

---

## Next LoveLA meeting
+ July 7th ???  
Marina Del Rey


### Create a rails api 
+ rails new lovela --api --skip-active-record 
+ cd lovela 

## Edit the Gemfile to include mongoid and bson_ext gems 
+ gem 'mongoid', '~> 6.0' 
+ gem 'bson_ext' 
+ bundle install 

## Create the mongoid.yml file 
+ rails g mongoid:config 

## Create the development database 
+ rails db:create 

## Populate development database 
+ Use the mongo cli to populate the database 

## Create scaffold 
+ rails g scaffold Station route_id: Integer lineName lineStation latitude longitude 
#### Note: I modified the model station.rb and removed the String datatype on latitude and longitude, this may not make a difference 

## Verify the server will run 
+ rails s 
+ goto localhost:3000/stations 


