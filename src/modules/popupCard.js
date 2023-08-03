/* eslint-disable linebreak-style */
import { setComment, getComments, displayComments } from './commentApi.js';
import commentCounter from './commentCounter.js';

export default async (index, meals) => {
  const popup = document.querySelector('.popup');
  const meal = await meals[index];
  const totalComments = await commentCounter(meal.idMeal);

  popup.innerHTML = `<div class="commentCard">
        <button class="close">X</button>
        <img src="${meal.strMealThumb}" alt="">
        <h3>${meal.strMeal}</h3>
        <div class="foodDetails">
        <div class="mealArea">
        <p>Area : ${meal.strArea}</p>
        <p>Category : ${meal.strCategory}</p>
        </div>
        <p class="mealInstruction">${meal.strInstructions}</p>
        </div>
        <h3 id="totalComments">Comments(${totalComments})</h3>
        <ul class="comment-box"></ul> 
        <form id="commentForm" action="">
            <h3>Add a comment</h3>
            <input type="text" id="usernameInput" placeholder="Your Name">
            <textarea id="commentInput" name="message" cols="30" rows="10" placeholder="Your insight" maxlength="500" required=""></textarea>
            <button id="submitCommentButton">comment</button>
        </form>
    </div>`;
  popup.style.display = 'flex';

  const submitCommentButton = document.getElementById('submitCommentButton');
  const commentBox = document.querySelector('.comment-box');

  const hideCommentBox = () => {
    commentBox.style.display = 'none';
  };

  const updateCommentsDisplay = async (idMeal) => {
    const comments = await getComments(idMeal);

    if (comments !== null && !comments.error) {
      displayComments(comments, commentBox);
    } else {
      hideCommentBox();
    }
  };

  submitCommentButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('usernameInput');
    const commentInput = document.getElementById('commentInput');

    const username = usernameInput.value.trim();
    const comment = commentInput.value.trim();

    if (username === '' || comment === '') {
      return;
    }

    const meal = await meals[index];
    await setComment(meal.idMeal, username, comment);
    commentBox.style.display = 'flex';
    usernameInput.value = '';
    commentInput.value = '';
    updateCommentsDisplay(meal.idMeal);
    const newCounter = totalComments + 1;
    const totalCommentsElement = document.getElementById('totalComments');
    totalCommentsElement.textContent = `Comments(${newCounter})`;
  });

  updateCommentsDisplay(meal.idMeal);
};
