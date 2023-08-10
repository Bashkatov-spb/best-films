const router = require('express').Router();
const { Comment, User } = require('../../db/models');
const CommentComponent = require('../../components/Comment');

router.post('/', async (req, res) => {
  try {
    const { comment, film_id } = req.body;
    const newComment = await Comment.create({ comment, film_id, user_id: req.session.user_id });
    const ourComment = await Comment.findOne({
      where: { id: newComment.id },
      include: { model: User },
    });
    const html = res.renderComponent(CommentComponent, { comment: ourComment });
    res.json({ message: 'success', html });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
