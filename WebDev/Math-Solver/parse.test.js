import parse from './parse.js';

//  Need to create .babelrc

describe('#parse', () => {
  describe('with exponents', () => {
    test('correct result', () => {
      expect(parse('3^2')).toBe(9);
    });
  });

  describe('with addition', () => {
    test('correct result', () => {
      expect(parse('3+2')).toBe(5);
    });
  });

  describe('with subtraction', () => {
    test('correct result', () => {
      expect(parse('2-3')).toBe(-1);
    });
  });

  describe('with multiplication', () => {
    test('correct result', () => {
      expect(parse('2*3')).toBe(6);
    });
  });

  describe('with divition', () => {
    test('correct result', () => {
      expect(parse('6/3')).toBe(2);
    });
  });

  describe('with parenthesis', () => {
    test('correct result', () => {
      expect(parse('(3+2)-1')).toBe(4);
    });
  });

  describe('with large numbers', () => {
    test('correct result in scientific notation', () => {
      expect(parse('10^30')).toBe(1e30);
    });
  });

  describe('with large numbers', () => {
    test('correct result in scientific notation', () => {
      expect(parse('10 ^ -30')).toBe(1e-30);
    });
  });

  describe('with a malformed equation', () => {
    test('it returns Nan', () => {
      expect(parse('abc')).toBeNaN();
    });
  });
});
