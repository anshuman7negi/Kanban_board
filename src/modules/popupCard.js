export default async (index, meals) => {
    const popup = document.querySelector('.popup');
    const meal = await meals[index];
    popup.innerHTML = `<div class="commentCard">
      <button class="close">X</button>
      <img src='${meal.strMealThumb}' alt=''>
      <h3>${meal.strMeal}</h3>
      <h3>3 comments</h3>
      <form action=''>
        <h3>Add a comment</h3>
        <input type='text' placeholder='Your Name'>
        <textarea name='message' cols='30' rows='10' placeholder='Your insight' maxlength='500' required=''></textarea>
        <button>comment</button>
      </form>
    </div>`;
    popup.style.display = "flex";
  };
  