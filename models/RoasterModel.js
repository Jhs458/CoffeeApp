var mongoose = require('mongoose');

var RoasterSchema = new mongoose.Schema({
 name: {required: true, type: String},
 logo: {required: true, type: String},
 location: {required: true, type: String},
 created: Date,
 rating: Number,
 createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 coffee: [{type: mongoose.Schema.Types.ObjectId, ref:'Coffee'}],
 reviews: [{ review: {required: true, type: String}, reviewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]}]
 //community = req.params.CommunityId
});

mongoose.model('Roaster', RoasterSchema);
