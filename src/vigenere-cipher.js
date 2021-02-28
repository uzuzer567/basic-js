const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (crypt) {
	this.crypt = crypt === false ? false : true;
  }
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  getTable() {
	  for (let i = 0; i < alphabet.length; i++) {
		table[i] = new Array(alphabet.length);
	  }
	  for (let i = 0; i < alphabet.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			let shift = i + j;
			if(shift >= alphabet.length) {
				shift = shift % alphabet.length;
			}
			table[i][j] = alphabet[shift];
		}
	  }
	  return table;
  }
}

module.exports = VigenereCipheringMachine;
