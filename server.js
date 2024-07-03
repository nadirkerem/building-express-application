const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  console.log(logEntry);
  next();
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.render('user', { name: name });
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
