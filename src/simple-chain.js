const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  reversed: false,
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  
  setChain() {
    this.chain = []
    this.reversed = false
  },
  
  addLink(value) {
    if(this.reversed) {
      this.chain.unshift(value);
    }
    else {
      this.chain.push(value);
    }
    return this;
  },
  
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
