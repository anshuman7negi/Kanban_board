const setComment = async (appId, username, comment) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B31JRUHNLMl2pdH1ddF9/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: appId,
      username,
      comment,
      currentDate,
    }),
  });

  return response;
};

const getComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B31JRUHNLMl2pdH1ddF9/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

const displayComments = (comments, commentBox) => {
  commentBox.innerHTML = '';
  comments.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));

  comments.forEach((comment) => {
    const li = document.createElement('li');

    const formattedDate = new Date(comment.creation_date).toLocaleDateString();
    li.textContent = `${formattedDate} : ${comment.username} :  ${comment.comment}`;
    commentBox.appendChild(li);
  });
};

export { setComment, getComments, displayComments };
