const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: false,
        default: 0
    },
    state: {
        type: Boolean,
        required: false,
        default: 0
    }
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;