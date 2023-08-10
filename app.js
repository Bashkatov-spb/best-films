require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const app = express();

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

const indexRouter = require('./routes');

app.use('/', indexRouter);

app.get('/my-cookies', (req, res) => {
  console.log(req.cookies); // { test: '42' }
  res.json(req.cookies);
});

app.get('/session', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.json(req.session);
});

app.listen(PORT, () => {
  console.log(`Жив, цел, орёл на ${PORT} порту`);
});
