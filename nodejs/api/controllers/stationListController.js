'use strict';


var mongoose = require('mongoose'),
Station = mongoose.model('Stations');

console.log('controller Station model ' + Station) ;

exports.list_all_stations = function(req, res) {
  Station.find({}, function(err, station) {
    if (err){
      res.send(err);
    }
    console.log('list all stations call');
    res.json(station);
  });
};

exports.list_by_routeid = function(req, res) {
   var inRouteID = parseFloat(req.params.routeID);
   Station.find({'route_id': inRouteID}, function(err, station) {
    if (err){
      res.send(err);
    }
    //console.log('list by routeid call ',  req.params.routeID);
    console.log(station);

    res.json(station);
  });  
};


exports.create_a_station = function(req, res) {
  var new_station = new Station(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(station);
  });
};



exports.update_a_station = function(req, res) {
  Station.findOneAndUpdate({_id: req.params.stationId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(station);
  });
};


exports.delete_a_station = function(req, res) {


  Station.remove({
    _id: req.params.stationId
  }, function(err, station) {
    if (err)
      res.send(err);
    res.json({ message: 'Station successfully deleted' });
  });
};
