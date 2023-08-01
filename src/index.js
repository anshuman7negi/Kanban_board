import './style.css';
import { fetchAndDisplayMeals } from './modules/mealApi.js';
import displayMeal from './modules/displayMeal.js';

const displayData = async () => {
    const meals = await fetchAndDisplayMeals();
    displayMeal(meals);
}

displayData();