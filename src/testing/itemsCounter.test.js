// Import the function to test
import itemsCounter from '../modules/itemsCounter.js';

describe('itemsCounter', () => {
  test('returns the number of li elements', () => {
    document.body.innerHTML = `
        <ul class="grid">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      `;

    document.body.innerHTML = `
      <ul class="grid">
        ${Array.from({ length: 5 }).map(() => '<li></li>')}
      </ul>
    `;

    const numberOfElements = itemsCounter();

    expect(numberOfElements).toBe(5);
  });
});