var mongoose = require('mongoose');

var CoffeeSchema = new mongoose.Schema({
 name: {required: true, type: String},
 origin: {required: true, type: String},
 roastProfile: {required: true, type: String},
 created: Date,
 rating: Number,
 createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 roaster: {type: mongoose.Schema.Types.ObjectId, ref:'Roaster'},
 reviews: [{ review: {required: true, type: String}, reviewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]}]
 //community = req.params.CommunityId
});

mongoose.model('Coffee', CoffeeSchema);
