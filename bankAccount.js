const Transaction = require('./transaction');
const moment = require('moment');

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
    const transaction = new Transaction(amount, this.balance, 'withdrawal');
    this.transactions.push(transaction);
  }

  printBankStatement() {
    this._logHeader();
    this.transactions.forEach(transaction => {
      this._logTransaction(transaction);
    });
  }

  _logHeader() {
    console.log('  date'.padEnd(11) + '||' +
      '  credit'.padEnd(11) + '||' +
      '  debit'.padEnd(11) + '||' +
      '  balance'.padEnd(11));
  }

  _logTransaction(transaction) {
    console.log(
      moment(transaction.date).format('DD/MM/YYYY') + ' || ' +
      (transaction.type === 'deposit' ? transaction.amount.toFixed(2) : '').padStart(9) + ' || ' +
      (transaction.type === 'withdrawal' ? transaction.amount.toFixed(2) : '').padStart(9) + ' || ' +
      transaction.balance.toFixed(2).padStart(9) + ' ');
  }
}

module.exports = BankAccount;
