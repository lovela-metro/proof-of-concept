'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var StationSchema = new Schema({
  routeID: {
    type: Number,
    required: true
  },
  lineName: {
    type: String,
    required: true
  },
  lineStation: {
    type: String,
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});


StationSchema.set('toObject', { virtuals: true })
StationSchema.set('toJSON', { virtuals: true })




StationSchema.virtual('position').get(function() {
   console.log("lat " + this.latitude) ;
   console.log("lng " + this.longitude) ;
    //return `{ lat: ${this.latitude}, lng: ${this.longitude} }
    return { lat: this.latitude, lng: this.longitude }
  }) ;

   
module.exports = mongoose.model('Stations', StationSchema);

/* sample structure 
"route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Anaheim Street Station",
    "latitude": 33.7818299,
    "longitude": -118.18938

 */