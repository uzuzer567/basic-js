const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	var number = 0;
	for(var i = 0; i < backyard.length; i++) {
		var back = backyard[i];
		for(var j = 0; j < back.length; j++) {
			if(back[j] == '^^'){
				number++;
			}
		}
	}
	if(number == 0|| backyard.length == 0) {
		return 0;
	}
	return number;
};
