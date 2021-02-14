const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof parseInt(sampleActivity) != "int" || sampleActivity == undefined) {
		return false;
	}
};
