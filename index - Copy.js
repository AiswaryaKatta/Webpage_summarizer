const express = require('express');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to your personal hub backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});