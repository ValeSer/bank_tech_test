const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction(amount, this.balance, 'deposit');
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    if (amount > this.balance) { throw new Error('Invalid request'); }
    this.balance -= amount;
  }

  printBankStatement() {
    this.transactions.forEach(transaction => {
      console.log('  date   || credit  || debit   || balance ');
    });
  }
}

module.exports = BankAccount;
