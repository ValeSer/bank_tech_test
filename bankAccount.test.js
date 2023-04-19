const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  let bankAccount;

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-10-20'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

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
    expect(function() { bankAccount.withdraw(400); }).toThrow('Invalid request');
  });

  test('it prints a bank statement with labels', () => {
    bankAccount.deposit(100);
    console.log = jest.fn();
    const expected = '  date     ||  credit   ||  debit    ||  balance  ';
    bankAccount.printBankStatement();
    expect(console.log).toHaveBeenCalledWith(expected);
  });

  test('it prints a bank statement with transactions info', () => {
    bankAccount.deposit(100);
    console.log = jest.fn();
    const expected = '20/10/2022 ||    100.00 ||      0.00 ||    100.00 ';
    bankAccount.printBankStatement();
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});
