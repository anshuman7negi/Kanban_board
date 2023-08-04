import './style.css';
import mealApi from './modules/mealApi.js';
import displayMeal from './modules/displayMeal.js';

const displayData = async () => {
  const meals = await mealApi();
  displayMeal(meals);
};

document.addEventListener('DOMContentLoaded', async () => {
  await displayData();
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('close')) {
    document.querySelector('main').classList.toggle('blurr');
    document.body.style.paddingTop = '90px';
    document.querySelector('.popup').style.display = 'none';
  }
});
