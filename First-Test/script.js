const googleData = ['cats.com', 'dogs.com', 'jobs.com', 'pictures.com'];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('s', googleData));

module.exports = googleSearch;
