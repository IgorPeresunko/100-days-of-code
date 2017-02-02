let express = require('express');

// Create our app
let app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static('public'));

app.listen(PORT, () => console.log('Express server is up on port ' + PORT));