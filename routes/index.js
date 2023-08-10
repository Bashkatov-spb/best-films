const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const filmsRouter = require('./views/films.routes');
const authRouter = require('./views/auth.routes');
const favoriteRouter = require('./views/favorites.routes');

const apiUsersRouter = require('./api/users.api.routes');
const apiFilmsRouter = require('./api/films.api.routes');
const apiAuthRouter = require('./api/auth.api.routes');
const apiFavoriteRouter = require('./api/favorite.api.routes');
const apiCommentsRouter = require('./api/comments.api.routes');

router.use('/', mainRouter);
router.use('/films', filmsRouter);
router.use('/auth', authRouter);
router.use('/favorites', favoriteRouter);

router.use('/api/users', apiUsersRouter);
router.use('/api/films', apiFilmsRouter);
router.use('/api/auth', apiAuthRouter);
router.use('/api/favorites', apiFavoriteRouter);
router.use('/api/comments', apiCommentsRouter);

module.exports = router;
