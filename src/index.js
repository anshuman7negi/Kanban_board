import './style.css';
import fetchAndDisplayMeals from './modules/mealApi.js';
import displayMeal from './modules/displayMeal.js';
import popupCard from './modules/popupCard.js';

const displayData = async () => {
    const meals = await fetchAndDisplayMeals();
    displayMeal(meals);
};

document.addEventListener('DOMContentLoaded', async () => {
    await displayData();
    const meals = await fetchAndDisplayMeals();
    const comment = document.querySelectorAll('.comment');
    for (let i = 0; i < comment.length; i += 1) {
        comment[i].addEventListener('click', () => {
            document.querySelector('main').style.display = 'none';
            popupCard(i, meals);
        });
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        document.querySelector('main').style.display = 'block';
        document.querySelector('.popup').style.display = 'none';
    }
});
