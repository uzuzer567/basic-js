const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turns = Math.pow(2, disksNumber) - 1;
  var speed = turnsSpeed / 3600;
  var seconds = Math.floor(turns / speed);
  return {
    turns: turns,
    seconds: seconds
  }
};
