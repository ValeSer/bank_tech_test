const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  test('has an initial balance of 0', () => {
    expect(bankAccount.getBalance()).toEqual(0);
  });

  test('has a balance of 100 with a deposit of 100', () => {
    bankAccount.deposit(100);
    expect(bankAccount.getBalance()).toEqual(100);
  });

  test('has a balance of 300 with a deposit of 100 and one of 200', () => {
    bankAccount.deposit(100);
    bankAccount.deposit(200);
    expect(bankAccount.getBalance()).toEqual(300);
  });

  test('has a balance of 100 with a deposit of 300 and a withdrawal of 200', () => {
    bankAccount.deposit(300);
    bankAccount.withdraw(200);
    expect(bankAccount.getBalance()).toEqual(100);
  });

  test('throws an error if the withdrawal amount is greater than the balance', () => {
    expect(function () { bankAccount.withdraw(400); }).toThrow('Invalid request');
  });

  test('it prints a bank statement with the balance', () => {
    bankAccount.deposit(100);
    console.log = jest.fn();
    bankAccount.printBankStatement('|| balance \n 100');
    expect(console.log).toHaveBeenCalledWith('|| balance \n 100');
  });
});
