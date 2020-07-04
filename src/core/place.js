const httpClient = require('./http-client');

class Place {

    constructor(token) {
        this.token = token;
    }

    getPlace(place) {
        return httpClient.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+encodeURI(place)+'&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key='+this.token);
    }
}

module.exports = Place;