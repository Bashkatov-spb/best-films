const FavoritesPage = require('../../components/FavoritesPage');
const { Film, Favorite } = require('../../db/models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const films = await Favorite.findAll({
      where: { user_id: req.session.user_id },
      include: {
        model: Film,
      },
    });
    const document = res.renderComponent(FavoritesPage, {
      title: 'Favorites page',
      films: films,
    });
    res.send(document);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
