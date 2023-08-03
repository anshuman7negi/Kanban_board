
export const displayAmountMessage = (count) => {
    const message = document.createElement('p');
    message.classList.add('item-count');
    message.textContent = `We have ${count} meals`;
    const foodSection = document.querySelector('.foodSection');
    foodSection.insertBefore(message, foodSection.firstChild);
  };
  