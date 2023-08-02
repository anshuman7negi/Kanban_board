export default (meals) => {
  // Create an empty list to hold the HTML list items
  const listItems = [];

  // Loop through each meal and create a list item with image and heart icon for it
  meals.slice(0, 30).forEach((meal, index) => {
    const item_id = `item${index + 1}`; // Generate item_id dynamically starting from "item1"
    const listItem = `
      <li class="foodCard">
        <img class="mealimage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <i class="fa-regular fa-heart heart" style="color: #dd0808;"></i>
        <button type="button" class="comment">Comments</button>
        <span class="likes" id="${item_id}_likes">0 Likes</span>
      </li>
    `;
    listItems.push(listItem);
  });

  // Display the list on the webpage
  const container = document.querySelector('#mealListContainer');
  container.innerHTML = `<ul class="grid">${listItems.join('')}</ul>`;

  /* eslint-disable no-console */
  // Attach event listeners to the heart icons
  const heartIcons = document.querySelectorAll('.heart');
  heartIcons.forEach((heart) => {
    heart.addEventListener('click', handleLike);
  });
};

async function handleLike(event) {
  // Get the item_id from the meal name
  const item_id = event.target.parentElement.querySelector('h2').textContent;

  try {
    // Fetch the app_id from the API
    const appResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
      method: 'POST',
    });
    const app_id = await appResponse.text(); // Receive the app_id as plain text

    // Send a POST request to create a new like for the item
    const likeResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id }), // Convert the item_id to a JSON string
    });

    /* eslint-disable no-plusplus */
    if (likeResponse.status === 201) {
      // Like was successfully created
      const container = event.target.parentElement;
      const likesElement = container.querySelector('.likes');
      let currentLikes = parseInt(likesElement.textContent);
      currentLikes++;
      likesElement.textContent = `${currentLikes} Likes`;
    } else {
      console.error('Failed to create like:', likeResponse.status);
    }
  } catch (error) {
    console.error('Error creating like:', error);
  }
}
