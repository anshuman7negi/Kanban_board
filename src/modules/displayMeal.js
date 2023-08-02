import { handleLike, getLikes } from './LikeApi.js';
import popupCard from './popupCard.js';

const addCommentEventListeners = (meals) => {
  const commentButtons = document.querySelectorAll('.comment');
  const mainElement = document.querySelector('main');
  const children = mainElement.children;
  commentButtons.forEach((comment, index) => {
    comment.addEventListener('click', () => {
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add('blurr');
      }
      popupCard(index, meals);
    });
  });
};

export default async (meals) => {
  const listItems = [];
  const likes = await getLikes();

  meals.slice(0, 30).forEach((meal, index) => {
    const itemId = `item${index + 1}`; // Changed 'item_id' to 'itemId'
    const mealLikes = likes.find((like) => like.item_id === meal.strMeal);
    const totalLikes = mealLikes ? mealLikes.likes : 0;

    const listItem = `
      <li class="foodCard">
        <img class="mealimage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <i class="fa-regular fa-heart heart" style="color: #dd0808;"></i>
        <button type="button" class="comment">Comments</button>
        <span class="likes" id="${itemId}_likes">${totalLikes} Likes</span> <!-- Changed 'item_id_likes' to 'itemIdLikes' -->
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
};
