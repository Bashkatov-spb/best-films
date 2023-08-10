const router = require('express').Router();
const AuthorizationForm = require('../../components/AuthorizationForm');
const RegisterForm = require('../../components/RegisterForm');

router.get('/register', (req, res) => {
  const document = res.renderComponent(RegisterForm, { title: 'Register Page' });
  res.send(document);
});

router.get('/authorization', (req, res) => {
  const document = res.renderComponent(AuthorizationForm, { title: 'Authorization Page' });
  res.send(document);
});

module.exports = router;
