var mongoose = require('mongoose');

// User Schema
var JobSchema = mongoose.Schema({
	title: {
		type: String,
		index:true
	},
	description: {
		type: String
	},
  experience: {
    type: Number
  }
});

var Job = module.exports = mongoose.model('Job', JobSchema);

module.exports.createJob = function(newJob, callback){
  newJob.save(callback);
};

module.exports.getJobByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getJobById = function(id, callback){
	User.findById(id, callback);
}
