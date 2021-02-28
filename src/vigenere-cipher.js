const CustomError = require("../extensions/custom-error");

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let table = [];

class VigenereCipheringMachine {
  constructor(crypt) {
	  if(crypt == undefined) {
		this.crypt = true;
	  }
	  else {
		 this.crypt = crypt; 
	  }
  }
  encrypt(message, key) {
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
  decrypt(string, key) {
	  if (string == undefined || key == undefined) {
		  throw new Error();
	  }
	  
	  this.getTable();
	  	 
	  let answer = [];
	  let stringArray = string.toString().toUpperCase().split('');
	  let keyArray = key.toString().toUpperCase();
	  
	  while(string.length > keyArray.length) {
		keyArray += key.toUpperCase();
	  }
	  
	  keyArray = keyArray.split('');

	  let column = [];
	  let row = [];
	  	  
	  for (let i = 0; i < stringArray.length; i++) {
		  row.push(alphabet.indexOf(keyArray[i]));
	  }
	  
	  let notLetterCounter = 0;
	  	  
	  for (let i = 0; i < stringArray.length; i++) {
		  for (let j = 0; j < alphabet.length; j++) {
			  if(stringArray[i] >= "A" && stringArray[i] <= "Z" && notLetterCounter === 0) {
				  if(table[j][row[i]] === stringArray[i]) {
					answer.push(alphabet[j]);
				  }
			  }
			  else if(stringArray[i] >= "A" && stringArray[i] <= "Z" && notLetterCounter !== 0) {
				  if(table[j][row[i - notLetterCounter]] === stringArray[i]) {
					answer.push(alphabet[j]);
				  }
			  }
			  else {
				  answer.push(stringArray[i]);
				  notLetterCounter++;
				  break;
			  }
		  }
	  }
	  	  	  	  
	  if(this.crypt) {
		  return answer.join('');
	  }
	  else {
	      return answer.reverse().join('');
	  }
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
