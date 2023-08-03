import { handleLike, getLikes } from './LikeApi.js';
import popupCard from './popupCard.js';
import { displayAmountMessage } from './itemsCounter.js'; // Import the displayAmountMessage function


const addCommentEventListeners = (meals) => {
  const commentButtons = document.querySelectorAll('.comment');
  const mainElement = document.querySelector('main');
  commentButtons.forEach((comment, index) => {
    comment.addEventListener('click', () => {
      mainElement.classList.toggle('blurr');
      document.body.style.paddingTop = '0';
      popupCard(index, meals);
    });
  });
};

export default async (meals) => {
  const listItems = [];
  const likes = await getLikes();

  meals.forEach((meal, index) => {
    const itemId = `item${index + 1}`; // Changed 'item_id' to 'itemId'
    const mealLikes = likes.find((like) => like.item_id === meal.strMeal);
    const totalLikes = mealLikes ? mealLikes.likes : 0;

    const listItem = `
      <li class="foodCard">
        <img class="mealimage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <i class="fa-regular fa-heart heart" style="color: #dd0808;"></i>
        <span class="likes" id="${itemId}_likes">${totalLikes} Likes</span>
        <button type="button" class="comment">Comments</button>
      </li>
    `;
    listItems.push(listItem);
  });

  const container = document.querySelector('#mealListContainer');
  container.innerHTML = `<ul class="grid">${listItems.join('')}</ul>`;

  const heartIcons = document.querySelectorAll('.heart');
  heartIcons.forEach((heart) => {
    heart.addEventListener('click', handleLike);
  });

  addCommentEventListeners(meals);

  // Get the count of items and display the amount message
  const itemCount = meals.length;
  displayAmountMessage(itemCount);
};
