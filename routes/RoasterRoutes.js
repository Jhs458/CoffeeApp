var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Roaster = mongoose.model('Roaster');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: "payload", //req.payload._id in the Route
  secret: "SafetyThird" //matches the secret in model
   });

   router.param('id', function(req, res, next, id) {
  Roaster.findOne({_id: id})
  //.populate('recipes', 'body postedBy')
  .exec(function(err, result) {
    if(!result) {res.status(404).send({err: "Could not find that specific community."});}
    req.roaster = result;
    next();
  });
});

   router.post('/', auth, function(req, res, next) {
     var roaster = new Roaster(req.body);
     roaster.createdBy = req.payload._id;
     //community.created = new Date();   //should we have community created date?
     roaster.save(function(err, result) {
       res.send(result);
     });
   });

   router.get('/', function(req, res, next) {
     Roaster.find({}, function(err, result) {
       res.send(result);
     });
   });


module.exports = router;
