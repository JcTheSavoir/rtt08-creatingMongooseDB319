//Models are a representation of our data.
// Schema: we create a structure of properties associated with model
const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
})
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;