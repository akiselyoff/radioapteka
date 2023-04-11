const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  console.log('Home page is ok');
  res.json('Home Page');
});

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}...`);
});
