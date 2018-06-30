<template>
  <div id="app" >
    <center>
      <div class="card">
        <div class="card-content">
          <div class="field">
            <label class="label">Enter Route ID</label>
            <div class="control">
              <input class="input" 
                v-model= "routeID" 
                type="text" 
                placeholder="Route ID e: 801, 802, 803, 804, 805, 806 " />
            </div>
            <a class="button is-danger" @click="getData">Get Metro Route Markers</a>
          </div>
        </div>
      </div>
    </center>
    <br>
    <div ref="vgmap">
      <gmap-map class="google-map"
        :center="center"
        :zoom="inzoom">
        <gmap-marker
            :key="index"
              v-for="(m, index) in RouteMarkers"
            :position="m.position"
            :clickable="true"
            :draggable="false">
        </gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'app',
    mounted: function() {
      this.geolocation()
    },
    data () {
      return {
        inzoom : 10,
        center: {lat: 10.0, lng: 10.0},
        RouteMarkers: [],
        markers: [],
        routeID: '',
         markersx: [
         { position: {lat: 34.0548999, lng: -118.24606}}
        ],
      }
    },
    methods: {
      geolocation() {
        console.log('geolocation call here ') ;
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          var myPosition = {
            position: { lat: position.coords.latitude,
                        lng: position.coords.longitude,}
          };
          this.markers.push(myPosition);
          console.log(myPosition);
          console.log(this.markers);
        });
      },

      testData() {
        console.log('Entered ID is ' + this.routeID);
      },

      getData(){
        //get data from server to map
        console.log('******call stations ')
        axios.get('http://localhost:3000/stations/'+ this.routeID).then((res) => {
          console.log('getData for Station markers ');
          var inStationMarkers = res.data;
          console.log("--> " , inStationMarkers[0].position) ;
          this.RouteMarkers = inStationMarkers ;
          this.routeID = '';
         
          // center the map with the 
          // given routes
          var midTotals = Math.floor(inStationMarkers.length/2) ;
          var midPos    = inStationMarkers[midTotals] ;
          console.log('mid info ' , midTotals, midPos) ;
          this.center   = midPos.position ; 
        });
      },
    }
  }
</script>

<style>
  .card-content {
    background-color: #b3b3ff;
    border: none;
    heigth: 200px;
    width: 400px;
    padding: 20px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .google-map {
      width: 700px;
      height: 400px;
      margin: 0 auto;
      background: gray;
    }
  .input{
    border-width:1px;
    border-radius:15px;
     padding: 10px;
  }
  .button {
      border-radius: 30;
      border: none;
      padding: 10px;
      margin-top: 5px;
  }
</style>
