const router = require('express').Router();
const { Film, Favorite, Comment, User } = require('../../db/models');
const FilmsPage = require('../../components/FilmsPage');
const FilmPage = require('../../components/FilmPage');
const FilmItem = require('../../components/FilmItem');
const FormUpdate = require('../../components/FormUpdate');

router.get('/', async (req, res) => {
  try {
    let userFavorites;
    const films = await Film.findAll({ order: [['id', 'ASC']] });
    if (req.session.user_id) {
      userFavorites = await Favorite.findAll({ where: { user_id: req.session.user_id } });
    }
    const document = res.renderComponent(FilmsPage, { title: 'Films Page', films, userFavorites });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:filmId', async (req, res) => {
  const { filmId } = req.params;
  try {
    const film = await Film.findOne({
      where: { id: filmId },
      include: { model: Comment, include: { model: User } },
    });
    const document = res.renderComponent(FilmPage, { film, title: 'Film page' });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:filmId/form-update', async (req, res) => {
  try {
    const { filmId } = req.params;
    const film = await Film.findOne({ where: { id: filmId } });
    const document = res.renderComponent(FormUpdate, { title: 'Form update', film });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
