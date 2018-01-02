// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Workouts', {
	title : String,
	workout : {
		type: String,
		name: String,
		sets: String,
		reps: Array
	}
});
