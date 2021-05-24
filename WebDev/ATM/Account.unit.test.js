const FileSystem = require('./FileSystem');
const Account = require('./Account');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('#deposit', () => {
  test('it adds cash to the account', async () => {
    // Create an account with a name and balance
    const startingBalance = 5;
    const amount = 10;
    const finalBalace = amount + startingBalance;
    const account = await createAccount('Andres', startingBalance);

    const spy = jest
      .spyOn(FileSystem, 'write')
      .mockReturnValue(Promise.resolve());

    // Call the deposit method
    await account.deposit(amount);

    // Check the balance of the account
    expect(account.balance).toBe(finalBalace);

    // Check the file is correct
    expect(spy).toBeCalledWith(account.filePath, finalBalace);
  });

  //   test('not toBe test', () => {
  //     const spy = jest.spyOn(FileSystem, 'write');
  //     expect(spy).not.toBeCalled();
  //   });
});

describe('#withdraw', () => {
  test('removes money from account', async () => {
    const startingBalance = 10;
    const amount = 5;
    const finalBalance = startingBalance - amount;
    const account = await createAccount('Andres', startingBalance);

    const spy = jest
      .spyOn(FileSystem, 'write')
      .mockReturnValue(Promise.resolve());

    await account.withdraw(amount);
    expect(account.balance).toBe(finalBalance);
    expect(spy).toBeCalledWith(account.filePath, finalBalance);
  });

  describe('not enough cash in account', () => {
    test('should give error', async () => {
      const startingBalance = 4;
      const amount = 5;
      const finalBalance = startingBalance - amount;
      const account = await createAccount('Andres', startingBalance);

      const spy = jest.spyOn(FileSystem, 'write');

      await expect(account.withdraw(amount)).rejects.toThrow();
      expect(account.balance).toBe(startingBalance);
      expect(spy).not.toBeCalled();
    });
  });
});

async function createAccount(name, balance) {
  const spy = jest
    .spyOn(FileSystem, 'read')
    .mockReturnValueOnce(Promise.resolve(balance));
  const account = await Account.find(name);
  spy.mockRestore();

  return account;
  cd;
}
