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
