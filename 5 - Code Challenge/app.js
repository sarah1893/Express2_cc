const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// 3. get routes
const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes)
})

// 2. Add your code below:
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})