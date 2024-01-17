const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const User = require('../models/User');

// ^ all begin with /recipes

//^ GET all recipes
router.get('/', async (req, res) => {
  res.send(await Recipe.find());
});

//^ GET all cuisines
router.get('/cuisines', async (req, res) => {
  try {
    //^ RETURNS THE UNIQUE ARRAY OF CUISINES - WHAT WE WANT FOR THE FILTER BUTTONS
    let query = await Recipe.find().distinct('cuisine');
    res.send(query);
  } catch (err) {
    res.status(404).send({message: err.message});
  }
});

//^ GET recipes by cuisine
router.get('/:cuisine', async (req, res) => {
  const {cuisine} = req.params;

  const recipes = await Recipe.find().where('cuisine').equals(cuisine);
  res.send(recipes);
});

// ^ GET user's recipes by username
router.get('/:username', async function (req, res) {
  const {username} = req.params;

  try {
    let query = await Recipe.find().where('addedBy').equals(username);
    // .select('recipes')
    // .populate('recipes');
    console.log(query, 'from API call');
    res.send(query);
  } catch (err) {
    res.status(404).send({message: err.message});
  }
});

// ^ GET favorites by username
router.get('/:username', async function (req, res) {
  const {username} = req.params;

  try {
    let query = await Recipe.find().where('addedBy').equals(username);
    // .select('recipes')
    // .populate('recipes');
    console.log(query, 'from API call');
    res.send(query);
  } catch (err) {
    res.status(404).send({message: err.message});
  }
});

// ^ POST user's recipes by username
// ! ONCE THE LOGIN is fixed how to grab the id of the logged in user? is this going to be more frontend? connected to the token/what is saved in local storage?
router.post('/:username', async function (req, res) {
  const {username} = req.params;
  const {dishName, cuisine, ingredients, instructions} = req.body;

  try {
    // Mongoose returns the id if it finds a match with .exists() method
    const userId = await User.exists({username});
    // finds the document with this _id and only returns the username field
    const userDetails = await User.find(userId);
    // only returns the username string
    const user = userDetails[0].username;
    console.log(user);

    if (userId) {
      const newRecipe = await Recipe.create({
        dishName,
        cuisine,
        ingredients,
        instructions,
        addedBy: user,
      });

      // with the .populate() method we can see that addedBy embedded so we can easily see that it matches the username that we have in the params
      let query = await newRecipe.populate('addedBy');
      res.send(query);
    } else {
      res.status(404).send({error: 'This user does not exist!'});
    }
  } catch (err) {
    res.status(404).send({message: err.message});
  }
});

module.exports = router;
