const Account = require('./Account');
const fs = require('fs');

// Create account
const name = 'Andres';

beforeEach(() => {
  try {
    fs.mkdirSync('accounts', {});
  } catch (err) {
    console.log(err);
  }
});

afterEach(() => {
  fs.rmSync('accounts', { recursive: true, force: true });
});

describe('.create', () => {
  test('creates new account and file', async () => {
    const account = await Account.create(name);
    //Check the name is correct
    expect(account.name).toBe(name);
    //Check balance
    expect(account.balance).toBe(0);
    //Check to ensure a file was created
    expect(fs.readFileSync(account.filePath).toString()).toBe('0');
  });
});

describe('.find', () => {
  test('returns the account', async () => {
    const balance = 10;

    fs.writeFileSync(`accounts/${name}.txt`, balance.toString());

    const account = await Account.find(name);
    expect(account.name).toBe(name);
    expect(account.balance).toBe(balance);
  });

  describe('when accounts does not exist', () => {
    test('undefined', async () => {
      const account = await Account.find(name);

      expect(account).toBeUndefined();
    });
  });
});
