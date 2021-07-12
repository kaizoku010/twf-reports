const express = require('express');
const mongosse = require('mongoose');
const bodyParser = require('body-parser');
const config = require("config");


//const entries = require('./routes/api/entries');
const app = express();
const path = require("path")

//app.use(bodyParser.json());
app.use(express.json())
const db = config.get("mongoURI");
mongosse
    .connect(db,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true
        })
    .then(() => console.log('its connected'))
    .catch(err => console.log(err));


    //routes to post and wat not
app.use('/api/entries', require('./routes/api/entries'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));






//serve a static dish of data
if (process.env.NODE_ENV == 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,
            'client', 'build', 'index.html'));
    });
    
}

const port = process.env.PORT || 5000;

app.listen(port,
    () => console
        .log(`Server started on port ${port}`));