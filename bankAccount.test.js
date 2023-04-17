const BankAccount = require('./bankAccount');

describe('BankAccount', () => {

  //beforeEach(() => {
  //});
  test('has an initial balance of 0', () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toEqual(0);
  });

  test('has a balance of 100 with a deposit of 100', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(100);
    expect(bankAccount.getBalance()).toEqual(100);
  })



})