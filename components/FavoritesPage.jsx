const React = require('react');
const Layout = require('./Layout');
const FilmItem = require('./FilmItem');

function FavoritesPage({ title, user, films }) {
  return (
    <Layout title={title} user={user}>
      <h1>This is favorites page</h1>
      <div className="container"></div>
      <div
        className="container films-list"
        style={{ display: 'flex', flexWrap: 'wrap', width: '700px' }}
      >
        {films.map((film) => (
          <FilmItem title={title} user={user} film={film.Film} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritesPage;
