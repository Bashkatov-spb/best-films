const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const favorite = await Favorite.findOne({
      where: { user_id: req.session.user_id, film_id: id },
    });
    if (favorite) {
      res.json({ message: 'уже в избранном' });
      return;
    } else {
      await Favorite.create({ user_id: req.session.user_id, film_id: id });
    }
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:favId', async (req, res) => {
  try {
    const { favId } = req.params;
    const result = await Favorite.destroy({
      where: { film_id: favId, user_id: req.session.user_id },
    });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'не твоя вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
