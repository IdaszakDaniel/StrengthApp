// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('routines', {
	_userId : mongoose.Schema.Types.ObjectId,
	title : String,
	workout : [{
		workouttype: String,
		name: String,
		sets: String,
		reps: [ Number ]
	}]
});

// { title: 'test18',
//   workout:
//    [ { type: 'back', name: 'ddddddd', sets: '5', reps: [Array] },
//      { type: 'back', name: 'ddddddd', sets: '5', reps: [Array] } ] }
