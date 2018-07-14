'use strict';
module.exports = function(app) {
  var stationList = require('../controllers/stationListController');
  
  //CORS 
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
  
  // Index
  app.route('/stations')
    .get(stationList.list_all_stations)
    .post(stationList.create_a_station);

  // Show
  app.route('/stations/:routeID')
    .get(stationList.list_by_routeid)
    .put(stationList.update_a_station)
    .delete(stationList.delete_a_station);
};
