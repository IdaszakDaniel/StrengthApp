
module.exports = mongoose.model('days', {
	_userId : mongoose.Schema.Types.ObjectId,
	title : String,
	workout : [{
		workouttype: String,
		name: String,
		reps: [ Number ],
    weight: [ Number ]
	}]
});
