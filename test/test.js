const Place = require('./../src');
const token = '';

const place = new Place(token);
place.getPlace('Suan atlantico')
    .then(json => console.log(json))