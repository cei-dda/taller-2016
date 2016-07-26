var express = require('express');
var pgClient = require('../../../utils/database_connection');
var router = express.Router();

router.post('/', function (req, res, next) {
  console.log(req, res, next);
  var client = pgClient.connect();
  var queryGetId = pgClient.getNextId(client);
  queryGetId.on('end', function () {
    /*
     SELECT *
     FROM your_table
     WHERE ST_Distance_Sphere(the_geom, ST_MakePoint(your_lon,your_lat)) <= radius_mi * 1609.34
     */
    var query = client.query('SELECT * FROM points');
    query.on('end', function () {
      console.log(arguments);
      client.end();
      res.send({
        status: 'success'
      });
    });
  });
});

module.exports = router;
