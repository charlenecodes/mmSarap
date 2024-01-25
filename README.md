# mmSarap

Why mmSarap? The name is a combination of two things: 'mm' which is the onomatopoeia used globally to express that something tastes good and 'masarap/sarap' which is the Filipino word for delicious. It is a recipe app that is meant to save delicious recipes.

A user does not need an account in order to view any recipes saved in the database. However, in order to add recipes and save them to favorites, an account would need to be created. With an account, the user is also able to delete previously added recipes.

This is an ongoing project with new features to be added.

### Current Features

- For all users
  - Explore all recipes or filter by categories
  - See all recipes posted by other users
  - Go to another user's profile to see a collection of recipes that they have posted
- For logged in users
  - Preview your user profile that displays all your recipe
  - See recipes that are added to favorites in the Home screen
  - Add/remove a recipe from favorites
  - Add/delete your recipe from the app

      https://github.com/charlenecodes/mmSarap/assets/105036972/7b22c1cd-e5f0-4159-b4b3-cbe7bd87bd11
    
      https://github.com/charlenecodes/mmSarap/assets/105036972/aa9112b8-00f1-442a-a345-4da7027a89ee

      https://github.com/charlenecodes/mmSarap/assets/105036972/ec43b995-88be-4a88-b1b1-dcebf8c67e93




### Technologies

This was created using the following technologies:

- React Native
- React Navigation
- React Native Vector Icons
- React Native Toast Message
- MongoDB
- Mongoose
- Node.js
- Postman

### Running the Project

- Open two Terminal screens
  - On the first screen enter `cd server` and then `npm run start` in order to connect to the MongoDB database
  - On the second screen, the project can be run on either android or ios
    - `npm run android` starts building the Android app
    - `npm run ios` starts building the iOS version
    - `npm run ios15` command was also customized in order to load the app on a iPhone 15 simulator
