class Transaction {
  constructor(amount, balance) {
    this.date = new Date();
    this.amount = amount;
    this.balance = balance;
    
  }

  getDate() {
    return this.date;
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Transaction;