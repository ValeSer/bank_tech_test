class Transaction {
  constructor(amount, balance) {
    this.date = new Date();
    
  }

  getDate() {
    return this.date;
  }
}

module.exports = Transaction;