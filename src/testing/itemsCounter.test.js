/* eslint-disable import/no-extraneous-dependencies */
// Import the function to test
import { JSDOM } from 'jsdom';
import itemsCounter from '../modules/itemsCounter.js';

const dom = new JSDOM('<!DOCTYPE html><div class="grid"><li>Item 1</li><li>Item 2</li><li>Item 3</li></div>');

global.document = dom.window.document;
// Test case 1
test('Returns the correct number of li elements in the grid', () => {
  // Arrange
  document.body.innerHTML = '<ul class="grid"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
  // Act
  const result = itemsCounter();
  // Assert
  expect(result).toBe(3);
});
// Test case 2: Check if the function returns 0 when the grid has no li elements
test('Returns 0 when the grid has no li elements', () => {
  // Arrange
  document.body.innerHTML = '<ul class="grid"></ul>';
  // Act
  const result = itemsCounter();
  // Assert
  expect(result).toBe(0);
});
// Test case 3
test('Returns the correct number of li elements in the grid with 5 li elements', () => {
  // Arrange
  document.body.innerHTML = `
    <ul class="grid">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  `;
  // Act
  const result = itemsCounter();
  // Assert
  expect(result).toBe(5);
});
