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
  });

  test('has a balance of 300 with a deposit of 100 and one of 200', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(100);
    bankAccount.deposit(200);
    expect(bankAccount.getBalance()).toEqual(300);
  });

  test('has a balance of 100 with a deposit of 300 and a withdrawal of 200', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(300);
    bankAccount.withdraw(200);
    expect(bankAccount.getBalance()).toEqual(100);
  });

  test('throws an error if the withdrawal amount is greater than the balance', () => {
    const bankAccount = new BankAccount();
    expect(function(){bankAccount.withdraw(400)}).toThrow('Invalid request');
  });

  test('it prints a bank statement with the balance', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(100);
    console.log = jest.fn();
    bankAccount.printBankStatement('|| balance \n 100');
    expect(console.log).toHaveBeenCalledWith('|| balance \n 100');
  });
  
})