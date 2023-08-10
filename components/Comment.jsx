const React = require('react');

function Comment({ comment }) {
  console.log(comment);
  return (
    <div style={{ width: '600px', border: '1px solid black', borderRadius: '15px' }}>
      <h4>{comment.User.name}</h4>
      <p>{comment.comment}</p>
    </div>
  );
}

module.exports = Comment;
