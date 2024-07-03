const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
