const mongoose = require('mongoose');
const TeamSchema=new mongoose.Schema({
    playerName: {type: String,
        required: [
            true,
            "Name is required"],
        minLength:[2,"Name should have at least 2 characters"]} //,other attributes
    ,preferredPosition:{type:String},
    status1: {type: String, default: 'Undecided'},
    status2: {type: String, default: 'Undecided'},
    status3: {type: String, default: 'Undecided'},
},{ timestamps: true });

module.exports.Team=mongoose.model('Team', TeamSchema);