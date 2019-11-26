const express = require('express');
const fetch = require("node-fetch");

class Place {

    constructor(token) {
        this.token = token;
    }

    getPlace(place) {
        return fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+encodeURI(place)+'&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key='+this.token);
    }
}

module.exports = Place;