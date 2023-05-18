'use strict';

var properties = require('../package.json')
var distance = require('../service/distance');

var controllers = {
   home: function(req, res) {
        var home = {
           about: "https://" +req.hostname+"/about",
           get_distance: "https://"+req.hostname+"/distance/:zipcode1/:zipcode2",
           get_distance_example: "https://"+req.hostname+"/distance/84010/97229"
       }
       res.json(home);
   },
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   get_distance: function(req, res) {
           distance.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
};

module.exports = controllers;