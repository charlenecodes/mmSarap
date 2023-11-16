const mongoose = require('mongoose');
// can also use desctructuring so you don't have to type mongoose each time
// const { Schema, model } = mongoose;
// then you would only need
// ^ const userSchema = new Schema({})
// ^ module.exports = new model("User", userSchema);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        //  automatically puts the value in lowercase
        lowercase: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }]
});

// Create and export the User model so we can create User documents
module.exports = new mongoose.model("User", userSchema);