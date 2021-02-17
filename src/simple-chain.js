const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  reversed: false,
  getLength() {
    return this.chain.length;
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
    if (!Number.isInteger(position)) {
        throw new Error();
    }
	
    position--;
    if (position < 0 || position > this.chain.length) {
      this.setChain();
      throw new Error();
    }

    if(this.reversed) {
      this.setChain();
      this.chain.splice(this.chain.length - position - 1, 1);
    }
    else {
      this.chain.splice(position, 1);
    }

    return this;
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
