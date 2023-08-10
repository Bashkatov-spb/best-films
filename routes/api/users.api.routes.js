const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    const [result] = await User.update({ name, email, password }, { where: { id: userId } });
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await User.destroy({ where: { id: userId } });
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
