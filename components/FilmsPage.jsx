const React = require('react');
const Layout = require('./Layout');
const FilmItem = require('./FilmItem');

function FilmsPage({ title, films, user, userFavorites }) {
  return (
    <Layout title={title} user={user}>
      <h1>This is films page</h1>
      <div className="container">
        <form id="form-add">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Poster
            </label>
            <input name="img" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div
        className="container films-list"
        style={{ display: 'flex', flexWrap: 'wrap', width: '700px' }}
      >
        {films.map((film) => (
          <FilmItem user={user} film={film} userFavorites={userFavorites} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FilmsPage;
