class BankAccount {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if(amount > this.balance){throw('Invalid request')};
    this.balance -= amount;
  }

  printBankStatement() {
    console.log(`|| balance \n ${this.balance}`) ;
  }
}

module.exports = BankAccount;