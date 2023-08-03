import { getComments } from "./commentApi.js";

const countComments = async (appId) => {

    const comments = await getComments(appId);
    if (Array.isArray(comments)) {
      const totalComments = comments.length;
      return totalComments;
    } else {
      return 0;
    }
};

export { countComments };
