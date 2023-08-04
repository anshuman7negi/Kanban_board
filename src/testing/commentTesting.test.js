import countComments from '../modules/commentCounter.js';

import { getComments } from '../modules/commentApi.js';

jest.mock('../modules/commentApi.js', () => ({
  getComments: jest.fn(),
}));

test('should return 0 for empty comments array', async () => {
  getComments.mockResolvedValue([]);

  const result = await countComments('appId123');
  expect(result).toBe(0);
});

test('should return the total number of comments', async () => {
  getComments.mockResolvedValue([
    { id: 1, comment: 'Great recipe!' },
    { id: 2, comment: 'Tasty meal!' },
    { id: 3, comment: 'Delicious!' },
  ]);

  const result = await countComments('appId456');
  expect(result).toBe(3);
});
