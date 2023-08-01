import './style.css';

// Function to fetch 30 meals from the API and display them in the list with images
async function fetchAndDisplayMeals() {
    try {
      // Fetch data from the API for 30 meals
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
  
      // Get the list of meals from the data
      const meals = data.meals;
  
      // Create an empty list to hold the HTML list items
      const listItems = [];
  
      // Loop through each meal and create a list item with image for it
      meals.slice(0, 10).forEach((meal) => {
        const listItem = `
          <li>
            <img class="mealimage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h2>${meal.strMeal}</h2>
            <button type="button" class="comments">Comments</button>
          </li>
        `;
        listItems.push(listItem);
      });

      // Display the list on the webpage
      const container = document.querySelector('#mealListContainer');
      container.innerHTML = `<ul class="grid">${listItems.join('')}</ul>`;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function to fetch and display 30 meals when the page loads
  fetchAndDisplayMeals();
  