const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)) {
	throw new RangeError();
  }
  
  var transformArray = [];
 
  for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--double-next') {
			transformArray.push(arr[i]);
		}
		else {
			if(arr[i] === '--discard-next') {	 
				if(i != arr.length - 1){
					  if(arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
						  i += 2;
					  }
					  else {
						  i ++;
					  }
				}
			}
			else if(arr[i] === '--discard-prev') {
				  if(i != 0) {
					  transformArray.pop();
				  }
			}
			else if(arr[i] === '--double-prev') {
				  if(i != 0) {
					  transformArray.push(arr[i - 1]);
				  }
			}
			else if(arr[i] === '--double-next') {
				  if(i != arr.length - 1) {
					  transformArray.push(arr[i + 1]);
				  }
			}
		}
  }
  return transformArray;
};
