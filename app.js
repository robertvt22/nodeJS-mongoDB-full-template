// already installed all dependencies

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('The connect with database is successfully'))
  .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));

app.listen(port, console.log(`Listening on port ${port}`));