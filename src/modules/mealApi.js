// Function to fetch 10 meals from the API and display them in the list with images
const fetchAndDisplayMeals = async () => {
  try {
      // Fetch data from the API for 10 meals
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const meals = data.meals;
      return meals;
  } catch (error) {
    /* eslint-disable no-console */
      console.error('Error fetching meals:', error);
      return []; // Return an empty array in case of an error
  }
};

export default fetchAndDisplayMeals;
