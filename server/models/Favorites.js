const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

// Create and export the User model so we can create User documents
module.exports = new mongoose.model("Recipe", recipeSchema);