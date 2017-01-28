let express = require('express');

// Create our app
let app = express();

app.use(express.static('public'));

app.listen(2000, () => console.log('Express server is up on port 2000'));
