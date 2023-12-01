const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const User = require('../models/User');

// ^ all begin with recipes

//^ GET all recipes
router.get('/', async (req, res) => {
    res.send(await Recipe.find())
});

// ^ GET user's recipes by username
router.get('/:username', async function (req, res) {
    const { username } = req.params;
    // const usernameExists = User.exists(username);
    // console.log(usernameExists)

    try {
        // does this need the curly brackets? - no
        let query = await User.where("username").equals(username).select("recipes").populate("recipes");
        res.send(query);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

//^ GET recipes by cuisine
router.get('/:cuisine', async (req, res) => {
    const { cuisine } = req.params;

    // ^ NEED TO CHECK FIRST WHETHER THIS EXISTS
    const cuisineExists = await Recipe.exists({ cuisine })

    // ! THE BIGGEST PROBLEM IS THAT THE ARRAY KEEPS THE INFORMATION AFTER SEND
    try {
        // returns the array of ids of everything with the same cuisine
        const recipes = await Recipe.find().select({ cuisine: cuisine });
        // console.log(recipes);

        const ids = await recipes.find({})

        console.log(ids)

        // returns the individual id of the recipes in the same cuisine and pushes just the id in an empty array
        // const recipesIdArray = [];
        // for (i in recipes) {
            // we get the values of the id and we can try to get the to findById
            // recipesIdArray.push(recipes[i]['_id'].valueOf())

            // console.log(recipes[i]['_id'])
        // }

        // uses the array created above in order to find the recipes by id
        // const recipesArray = [];
        // for (i in recipesIdArray) {
            // const query = await Recipe.findById(recipesIdArray[i]).populate()
            // recipesArray.push(query)
        // }
        // res.send(recipesArray)
    } catch(err) {
        if (cuisineExists === null) {
            res.status(404).send({ error: 'This cuisine does not exist!' })
        }
    }
});

// ^ POST user's recipes by username
// ! ONCE THE LOGIN is fixed how to grab the id of the logged in user? is this going to be more frontend? connected to the token/what is saved in local storage?
router.post('/:username', async function (req, res) {
    const { username } = req.params;
    const { dishName, cuisine, ingredients, instructions } = req.body;

    try {
        // Mongoose returns the id if it finds a match with .exists() method
        const userId = await User.exists({ username })
        // finds the document with this _id and only returns the username field
        const userDetails = await User.find(userId)
        // only returns the username string
        const user = userDetails[0].username
        console.log(user)

        if (userId) {
            const newRecipe = await Recipe.create({
                dishName,
                cuisine,
                ingredients,
                instructions,
                addedBy: user
            })

            // with the .populate() method we can see that addedBy embedded so we can easily see that it matches the username that we have in the params
            let query = await newRecipe.populate("addedBy");
            res.send(query);
        } else {
            res.status(404).send({ error: 'This user does not exist!' })
        }

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

module.exports = router;
