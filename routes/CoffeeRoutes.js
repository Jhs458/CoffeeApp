var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Coffee = mongoose.model('Coffee');
var Roaster = mongoose.model('Roaster');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: "payload", //req.payload._id in the Route
  secret: "SafetyThird" //matches the secret in model
   });


   router.post('/', auth, function(req, res, next) {
     var coffee = new Coffee(req.body);
     coffee.createdBy = req.payload._id;
     //coffee.created = new Date();   //should we have community created date?
     coffee.save(function(err, result) {
       res.send(result);
     });
   });

    router.get('/edit/:id', function(req, res, next){
      Coffee.findOne({_id: req.params.id}, function(err, result){
        if(err) {return next(err);}
        if(!result) {return next({err: "Error finding coffee by ID."});}
        res.send(result);
      });
    });

    router.put('/:id', auth, function (req, res, next) {
      Coffee.update({_id: req.params.id}, req.body, function (err, result) {
        if(err) return next(err);
        if(!result) return next({err: "The post wasn't found for updating"});
        res.send(result);
      });
    });

    router.delete('/:id', auth, function(req, res, next) {
      Coffee.remove({_id: req.params.id}, function(err, result) {
        if(err) return next(err);
        res.send();
          });
        });




module.exports = router;
