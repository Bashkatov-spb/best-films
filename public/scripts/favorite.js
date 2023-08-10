const filmsFavoritesList = document.querySelector('.films-list');

if (filmsFavoritesList) {
  filmsFavoritesList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-favorite')) {
      const { id } = e.target.closest('.card').dataset;
      const res = await fetch(`/api/favorites/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message !== 'success') {
        alert(data.message);
      }
    }
    if (e.target.classList.contains('btn-unfavorite')) {
      const { id } = e.target.closest('.card').dataset;
      const res = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      console.log(data);
      if (data.message !== 'success') {
        alert(data.message);
      }
    }
  });
}
