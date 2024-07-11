const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const mongo = 'mongodb://localhost/todo';


app.use(bodyParser.json());
app.use('/api/auth', require('/routes/auth'));

mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose error:'));
db.once('open', () => {
    console.log('Connected to mongoose');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
