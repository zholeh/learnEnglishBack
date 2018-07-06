const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Headers', ['Content-Type']);
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['DELETE', 'PUT', 'GET', 'POST']);
  next();
});

app.use(express.static(`${__dirname}/public`));

app.get('/api/users', (req, res) => {
  res.send('');
});
app.get('/api/users/:id', (req, res) => {
  if (req !== true) {
    res.send('');
  } else {
    res.status(404).send();
  }
});
app.post('/api/users', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  if (req !== false) {
    res.status(412).send('user');
  } else {
    return res.send('user');
  }
  return res;
});

app.delete('/api/users/:id', (req, res) => {
  if (req !== true) {
    res.send(true);
  } else {
    res.status(404).send(false);
  }
});

app.put('/api/users', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  if (req !== true) {
    res.send(true);
  } else {
    res.status(404).send(false);
  }
  return res;
});

app.listen(3000, () => {
  console.log('Сервер ожидает подключения...');
});
