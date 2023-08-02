const handleLike = async (event) => {
  const itemId = event.target.parentElement.querySelector('h2').textContent;

  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LDFAwllsOOqaxldVre9W/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });

  const container = event.target.parentElement;
  const likesElement = container.querySelector('.likes');
  let currentLikes = parseInt(likesElement.textContent, 10);
  currentLikes += 1;
  likesElement.textContent = `${currentLikes} Likes`;
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LDFAwllsOOqaxldVre9W/likes');
  const data = await response.json();
  return data;
};

export { handleLike, getLikes };
