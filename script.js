const googleData = ['cats.com', 'dogs.com', 'jobs.com', 'pictures.com'];

const googleSearch = (searchInput) => {
  const matches = googleData.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('s'));

module.exports = googleSearch;
