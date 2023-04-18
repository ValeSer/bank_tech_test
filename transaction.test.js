const Transaction = require('./transaction');

describe('Transaction', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2023-01-01'))
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  
  test('returns the date', () => {
    const transaction = new Transaction(200, 200);
    expect(transaction.getDate()).toEqual(new Date('2023-01-01T00:00:00.000Z'));
  });
})