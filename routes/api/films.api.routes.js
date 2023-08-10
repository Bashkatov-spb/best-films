const router = require('express').Router();
const FilmItem = require('../../components/FilmItem');
const { Film } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:filmId', async (req, res) => {
  try {
    const { filmId } = req.params;
    const film = await Film.findOne({ where: { id: filmId } });
    res.json(film);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const newFilm = await Film.create({ title, description, img, user_id: req.session.user_id });
    const html = res.renderComponent(FilmItem, { film: newFilm }, { htmlOnly: true });
    console.log(html);
    res.json({ html });
  } catch ({ message }) {
    res.json(message);
  }
});

router.put('/:filmId', async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const { filmId } = req.params;
    const [result] = await Film.update(
      { title, description, img },
      { where: { id: filmId, user_id: req.session.user_id } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json(message);
  }
});

router.delete('/:filmId', async (req, res) => {
  try {
    const { filmId } = req.params;
    const result = await Film.destroy({ where: { id: filmId, user_id: req.session.user_id } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
