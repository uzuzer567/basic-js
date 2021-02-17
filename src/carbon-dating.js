const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if(sampleActivity == undefined || sampleActivity == null) {
		return false;
	}
	if(!(sampleActivity instanceof String)) {
		return false;
	}
};
