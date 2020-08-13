const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// 2. Add your code below:
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})