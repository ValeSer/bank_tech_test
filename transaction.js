class Transaction {
  constructor(amount, balance, type) {
    this.date = new Date();
    this.amount = amount;
    this.balance = balance;
    this.type = type;
  }

  getDate() {
    return this.date;
  }

  getAmount() {
    return this.amount;
  }

  getBalance() {
    return this.balance;
  }

  getType() {
    return this.type;
  }
}

module.exports = Transaction;
