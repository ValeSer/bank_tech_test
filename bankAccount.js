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
    const transaction = new Transaction(amount, this.balance, 'withdrawal');
    this.transactions.push(transaction);
  }

  printBankStatement() {
    console.log('  date'.padEnd(11) + '||' +
      '  credit'.padEnd(11) + '||' +
      '  debit'.padEnd(11) + '||' +
      '  balance'.padEnd(11));

    this.transactions.forEach(transaction => {
      console.log(
        transaction.date + '||' +
        (transaction.type === 'deposit' ? transaction.amount : '') + '||' +
        (transaction.type === 'withdrawal' ? transaction.amount : '') + '||' +
        transaction.balance);
    });
  }
}

module.exports = BankAccount;
