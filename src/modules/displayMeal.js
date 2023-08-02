export default (meals) => {
  // Create an empty list to hold the HTML list items
  const listItems = [];

  // Loop through each meal and create a list item with image for it
  meals.slice(0, 10).forEach((meal) => {
    const listItem = `
          <li class="foodCard">
              <img class="mealimage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h2>${meal.strMeal}</h2>
              <i class="fa-regular fa-heart heart" style="color: #dd0808;"></i>
              <button type="button" class="comment">Comments</button>
          </li>
      `;
    listItems.push(listItem);
  });

  // Display the list on the webpage
  const container = document.querySelector('#mealListContainer');
  container.innerHTML = `<ul class="grid">${listItems.join('')}</ul>`;
};
