const mongosse = require(`mongoose`);
const table = mongosse.Schema;


const EntrySchema = new table(
    {

        title: {
            type: String,
            required:true
        },

        name: {
            type: String,
            required: true

        },
        
        author: {
            type: String,
            required: true

        },

        date: {
            type: Date,
            default: Date.now
        }


    });

module.exports = Entry = mongosse.model('entry', EntrySchema);
