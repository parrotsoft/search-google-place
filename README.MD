
## Search Google Place

**About**
This is a node module, to return place of google with your token.

**Installation**

    npm install --save search-google-place

**Demo**

    const Place = require('search-google-place');
    const placeQuery = new Place('your token');
    placeQuery.getPlace('Suan atlantico')
       .then(json => console.log(json));

**License**
--- 
MIT
