const { sum, getLargest } = require('./script');

describe('#sum', () => {
  test('it adds numbers correctly', () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(3);
  });
});

describe('#getLargest', () => {
  test('it returns the largest num in the array', () => {
    const array = [1, 2, 3, 4];
    expect(getLargest(array)).toBe(4);
  });

  describe('with empty array', () => {
    test('it returns null when given an empty array', () => {
      expect(getLargest([])).toBeNull();
    });
  });
});

describe('#Equal !== toBe', () => {
  test('equal vs toBe', () => {
    const obj = { a: 1, b: 2 };

    // Check value
    expect(obj).toEqual({ a: 1, b: 2 });

    // Check reference
    expect(obj).toBe(obj);
    //   expect(obj).toBe({ a: 1, b: 2 });
  });
});
