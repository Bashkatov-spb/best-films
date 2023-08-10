const formComment = document.querySelector('#form-comment');

if (formComment) {
  formComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const { comment } = e.target;
    console.log(comment.value);
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ comment: comment.value, film_id: id }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      e.target.insertAdjacentHTML('afterend', data.html);
      formComment.reset();
    } else {
      alert(data.message);
    }
  });
}
