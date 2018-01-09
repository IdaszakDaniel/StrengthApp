
module.exports = mongoose.model('settings', {
	_userId : mongoose.Schema.Types.ObjectId,
	press : Number,
  bench : Number,
  squat : Number,
  dl : Number
});
