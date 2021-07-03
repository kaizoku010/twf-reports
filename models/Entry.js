const mongosse = require(`mongoose`);
const table = mongosse.Schema;


const EntrySchema = new table(
    {
        name: {
            type: String,
            required: true

        },

        date: {
            type: Date,
            default: Date.now
        }
    });

module.exports = Entry = mongosse.model('entry', EntrySchema);
