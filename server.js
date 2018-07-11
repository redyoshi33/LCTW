const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
// const passport = require('passport');

const users = require('./routes/api/home');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

// Use Routes
app.use('/api/home', home);


const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));