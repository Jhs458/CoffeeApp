var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Coffee = mongoose.model('Coffee');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: "payload", //req.payload._id in the Route
  secret: "SafetyThird" //matches the secret in model
   });






module.exports = router;
