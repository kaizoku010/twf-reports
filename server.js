const express = require('express');
const mongosse = require('mongoose');
const bodyParser = require('body-parser');


//const entries = require('./routes/api/entries');
const app = express();
const path = require("path")

//app.use(bodyParser.json());
app.use(express.json())
//const db = require('./config/keys.js').mongoURI;
mongosse
    .connect('mongodb+srv://dev:dev64649@friday.qpgpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true
        })
    .then(() => console.log('its connected'))
    .catch(err => console.log(err));

app.use('/api/entries', require('./routes/api/entries'));
app.use('/api/user', require('./routes/api/user'));






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