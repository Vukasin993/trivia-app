const Chuck  = require('chucknorris-io'),
      client = new Chuck();


const response = client.getRandomJoke().then(function (response) {
    return response.data
}).catch(function (err) {
    
});


