const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    recipe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }]
});

// Create and export the User model so we can create User documents
module.exports = new mongoose.model("User", userSchema);