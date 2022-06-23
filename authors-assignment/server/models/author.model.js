const mongoose = require('mongoose');
const AuthorSchema=new mongoose.Schema({
    name: {type: String,
        required: [
            true,
            "Title is required"],
        minLength:[3,"name should have at least 3 characters"]} //,other attributes
},{ timestamps: true });

module.exports.Author=mongoose.model('Author', AuthorSchema);