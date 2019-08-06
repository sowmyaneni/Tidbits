var express = require('express');
var bodyParser = require('body-parser');
var dbHelpers = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/convstarts', function(req, res) {
  dbHelpers.selectRandomStarter(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/jokes', function (req, res) {
  dbHelpers.selectRandomJoke(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/quotes', function (req, res) {
  dbHelpers.selectRandomQuote(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/pickups', function (req, res) {
  dbHelpers.selectRandomPickup(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3005, function() {
  console.log('listening on port 3005!');
});

