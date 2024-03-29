const express = require('express');
const router = express.Router();
const Entry = require('../../models/Entry');
const auth = require("../../middleware/auth")

//@GET api/entries
//@desc get all entires

router.get('/', (req, res) => {
    Entry.find()
        .sort({ date: -1 })
        .then(entries => res.json(entries))
});

//@POST api/entries
//@desc add entires

router.post('/', auth, (req, res) => {
    const newEntry = new Entry(
        {
            name: req.body.name,
            title: req.body.title,
            author: req.body.author
        });
    
    newEntry
        .save()
        .then(entry => res.json(entry));

});


//@DELETE api/entries/id
//@desc add entires

router.delete('/:id', auth, (req, res) => {
    Entry.findById(req.params.id)
        .then(entry => entry.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false}));


});

module.exports = router;