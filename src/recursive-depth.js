const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (!array.find(elem => Array.isArray(elem))) {
      return 1;
    } 
	else {
      let numbers = [];
      for (let elem of array) {
        let number = 0;
        if(Array.isArray(elem)) {
          number += this.calculateDepth(elem);
          numbers.push(number);
        }
      }
      return Math.max(...numbers) + 1;
    } 
  }
};
