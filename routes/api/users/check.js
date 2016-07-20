var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.send({
        status: 'success'
    });
    var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/finder';
    var client = new pg.Client(connectionString);
    client.connect();
    var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
    query.on('end', function() { client.end(); });
});

module.exports = router;