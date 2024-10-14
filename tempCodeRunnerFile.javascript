const axios = require('axios'); // Use in Node.js or a front-end framework

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Fetching a random meal using Axios
axios.get(url)
  .then(response => {
    const meal = response.data.meals[0]; // Get the first meal
    console.log(`Recipe: ${meal.strMeal}`);
    console.log(`Category: ${meal.strCategory}`);
    console.log(`Instructions: ${meal.strInstructions}`);
    console.log(`Image: ${meal.strMealThumb}`);
    console.log('------------------------------'); // Separator for readability
  })
  .catch(error => {
    console.error('Error:', error);
  });
