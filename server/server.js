const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('./client/dist'));
app.get('/products/:id', (req, res) => res.send(req.params.id));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));