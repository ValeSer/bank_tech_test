const Transaction = require('./transaction');

describe('Transaction', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2023-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('returns the date', () => {
    const transaction = new Transaction(200, 1200, 'deposit');
    expect(transaction.getDate()).toEqual(new Date('2023-01-01T00:00:00.000Z'));
  });

  test('returns the amount', () => {
    const transaction = new Transaction(200, 1200, 'deposit');
    expect(transaction.getAmount()).toEqual(200);
  });

  test('returns the balance', () => {
    const transaction = new Transaction(200, 1200, 'deposit');
    expect(transaction.getBalance(200)).toEqual(1200);
  });

  test('returns the type', () => {
    const transaction = new Transaction(200, 1200, 'deposit');
    expect(transaction.getType()).toEqual('deposit');
  });
});
