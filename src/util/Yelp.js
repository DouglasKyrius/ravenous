const apiKey = 'v5l2G6TZ4m3_FwB0eM3Z-ULg0IfAgSoek6BrOrLvJ8E8pGVoCFoDac5CTFjEptzdz-IirigAUy_Qxv9ExTS04qX8ixLA0S-H27qR40mmzBcTSxXaY8_akAQ9qsksX3Yx';
const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
  }
};
