const googleSearch = require('./script');

const dummyDB = ['disney.com', 'hbo.com', 'amazon.com', 'fmovies.com'];
describe('googleSearch', () => {
  it('this is a test', () => {
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('elsdjh', dummyDB)).toEqual([]);
    expect(googleSearch('hbo', dummyDB)).toEqual(['hbo.com']);
  });

  it('work with undef', () => {
    expect(googleSearch(undefined, dummyDB)).toEqual([]);
  });

  it('work with null input', () => {
    expect(googleSearch(null, dummyDB)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dummyDB).length).toEqual(3);
  });
});
