const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	var answer = "";
	if(options.separator == undefined) {
		options.separator = "+";
	}
	if(options.additionSeparator == undefined) {
		options.additionSeparator = "|";
	}
	if(options.addition === undefined) {
		options.addition = "";
	}
	else {
		options.addition = String(options.addition);
	}
	if(options.repeatTimes == null || options.repeatTimes == undefined) {
		options.repeatTimes = 1;
	}
	if(options.additionRepeatTimes == null || options.additionRepeatTimes == undefined) {
		options.additionRepeatTimes = 1;
	}
	for(var j = 0; j < options.repeatTimes; j++) {
		answer += "" + String(str);
		for(var i = 0; i < options.additionRepeatTimes; i++) {
			answer += "" + String(options.addition);
			if(i != options.additionRepeatTimes - 1) {
				answer += "" + options.additionSeparator;
			}
		}
		if(j != options.repeatTimes - 1) {
			answer += "" + options.separator;
		}
	}
	return answer;
};
  
