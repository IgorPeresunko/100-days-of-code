import express from 'express';

// Create our app
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Express server is up on port ${PORT}`));