var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Coffee = mongoose.model('Coffee');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: "payload", //req.payload._id in the Route
  secret: "SafetyThird" //matches the secret in model
   });


   router.param('id', function(req, res, next, id) {
  Coffee.findOne({_id: id})
  //.populate('recipes', 'body postedBy')
  .exec(function(err, result) {
    if(!result) {res.status(404).send({err: "Could not find that specific community."});}
    req.coffee = result;
    next();
  });
});

   router.post('/', auth, function(req, res, next) {
     var coffee = new Coffee(req.body);
     coffee.createdBy = req.payload._id;
     //community.created = new Date();   //should we have community created date?
     coffee.save(function(err, result) {
       res.send(result);
     });
   });



module.exports = router;
