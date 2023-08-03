// Function to fetch data from the API and display them in the list with images
export default async () => {
  // Fetch data from the API
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  const { meals } = data;
  return meals;
};
