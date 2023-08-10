const React = require('react');
const Layout = require('./Layout');
const Comment = require('./Comment');

function FilmPage({ film, title, user }) {
  console.log(film);
  return (
    <Layout title={title} user={user}>
      <div data-id={film.id} className="card" style={{ width: '18rem', margin: '20px' }}>
        <img src={film.img} class="card-img-top" alt="film" />
        <div class="card-body">
          <h5 class="card-title">{film.title}</h5>
          <p>{film.description}</p>
        </div>
      </div>
      <form data-id={film.id} id="form-comment">
        <input name="comment" type="text" />
        <button type="submit">Отправить комментарий</button>
      </form>
      {film.Comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </Layout>
  );
}

module.exports = FilmPage;
