import { getComments } from './commentApi.js';

export default async (appId) => {
  const comments = await getComments(appId);
  if (Array.isArray(comments)) {
    const totalComments = comments.length;
    return totalComments;
  }
  return 0;
};
