const Place = require('search-google-place');

const place = new Place('token');
place.getPlace('Suan atlantico')
    .then(res => res.json())
    .then(json => console.log(json))