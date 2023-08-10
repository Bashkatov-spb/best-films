const React = require('react');

function FilmItem({ title, film, user, userFavorites = [] }) {
  console.log(film);
  const favs = userFavorites.filter((fav) => fav.film_id === film.id);
  return (
    <div data-id={film.id} className="card" style={{ width: '18rem', margin: '20px' }}>
      <img src={film.img} class="card-img-top" alt="film" />
      <div class="card-body">
        <h5 class="card-title">{film.title}</h5>
        <a href={`/films/${film.id}`} class="btn btn-primary">
          More info
        </a>
        {user && user.id === film.user_id && (
          <>
            <a href={`/films/${film.id}/form-update`} className="btn btn-warning btn-update">
              update
            </a>
            <button className="btn btn-danger btn-delete">delete</button>
          </>
        )}
        {user && (
          <>
            {favs.length ? (
              <button className="btn btn-success btn-unfavorite">remove favorite</button>
            ) : (
              <button className="btn btn-success btn-favorite">add to favorite</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
module.exports = FilmItem;
