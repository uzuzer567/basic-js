const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (crypt) {
	this.crypt = crypt === false ? false : true;
  }
  encrypt() {
  	  if (message == undefined || key == undefined) {
		  throw new Error();
	  }
	  
	  this.getTable();
	  	 
	  let answer = [];
	  let messageArray = message.toString().toUpperCase().split('');
	  let keyArray = key.toString().toUpperCase();
	  
	  while(message.length > keyArray.length) {
		keyArray += key.toUpperCase();
	  }
	  
	  keyArray = keyArray.split('');

	  let column = [];
	  let row = [];
	  
	  for (let i = 0; i < messageArray.length; i++) {
		  column.push(alphabet.indexOf(messageArray[i]));
	  }
	  
	  for (let i = 0; i < messageArray.length; i++) {
		  row.push(alphabet.indexOf(keyArray[i]));
	  }
	  
	  let notLetterCounter = 0;
	  
	  for(let i = 0; i < messageArray.length; i++) {
		  if(messageArray[i] >= "A" && messageArray[i] <= "Z" && notLetterCounter === 0) {
			answer.push(table[column[i]][row[i]]);
		  }
		  else if(messageArray[i] >= "A" && messageArray[i] <= "Z" && notLetterCounter !== 0) {
			answer.push(table[column[i]][row[i - notLetterCounter]]);
		  }
		  else {
			answer.push(messageArray[i]);
			notLetterCounter++;
		  }
	  }
	  	  
	  if(this.crypt) {
		  return answer.join('');
	  }
	  else {
	      return answer.reverse().join('');
	  }
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
