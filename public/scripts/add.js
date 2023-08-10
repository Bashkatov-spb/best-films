const formAdd = document.querySelector('#form-add');

if (formAdd) {
  formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, description, img } = e.target;
    const res = await fetch('/api/films', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    const filmsList = document.querySelector('.films-list');
    filmsList.insertAdjacentHTML('beforeend', data.html);
    formAdd.reset();
  });
}
