const React = require('react');
const Layout = require('./Layout');

function FormUpdate({ title, user, film }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form data-id={film.id} id="form-update">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              value={film.title}
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
              value={film.description}
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
            <input
              value={film.img}
              name="img"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = FormUpdate;
