const router = require('express').Router();
const Main = require('../../components/Main');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const document = res.renderComponent(Main, { title: 'Main page' });
    res.cookie('test', 40, { maxAge: 60000 });
    res.end(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
