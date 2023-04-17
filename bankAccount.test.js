const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('has an initial balance of 0', () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toEqual(0);
  })
})