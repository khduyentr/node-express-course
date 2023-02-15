const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

// set up the structure for the document
const TaskSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
        trim: true, 
        maxlength: [20, 'Name can not be more than 20 characters'], 
    },
    completed: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema);