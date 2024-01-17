// ^FIGURE OUT HOW TO PUT THE OTHER THINGS IN A CUSTOM HOOK SO THEY CAN JUST BE REUSED

// import {useState, useEffect, useContext} from 'react';
// import axios from 'axios';
// import {AuthContext} from '../../../Context/authContext';

// export default function useUserRecipes() {
//   const {currentUser} = useContext(AuthContext);

//   // this returns the recipes this specific user has posted
//   const userRecipes = allRecipes?.filter(
//     recipe => recipe.addedBy === currentUser.username,
//   );

//   // const [userRecipes, setUserRecipes] = useState([]);
//   console.log(userRecipes, 'from Profile');

//   const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

//   useEffect(() => {
//     async function getRecipes() {
//       try {
//         await axios
//           .get(`http://${localhost}:3000/recipes/${currentUser.username}`)
//           .then(res => {
//             setRecipes(res.data);
//           });
//       } catch (err) {
//         console.error({error: `${err.message} from Profile`});
//       }
//     }

//     getRecipes();
//   }, [currentUser]);

//   return {
//     userRecipes,
//   };
// }
