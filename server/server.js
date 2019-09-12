const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;


app.use(express.static('./client/dist'));
app.use('/products/:id', express.static('./client/dist'));
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies);
  res.send('Hello World!')
});
app.get('/cookies', (req, res) => {
  console.log('Cookies: ', req.cookies);
  res.cookie('user_id', 'value');
  res.send(req.cookies);
});
// app.get('/products/:id',
//   (req, res) => {
//     res.sendFile(path.join(__dirname, './../client/dist/index.html'));
//   });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));