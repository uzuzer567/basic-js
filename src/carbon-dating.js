const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if(sampleActivity == undefined || sampleActivity < 0 || typeof sampleActivity !== "string" || MODERN_ACTIVITY < sampleActivity) {
		return false;
	}
	if(!parseFloat(sampleActivity)) {
		return false;
	}
	return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / Math.log(2) * HALF_LIFE_PERIOD);
};
