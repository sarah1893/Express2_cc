# Exercise: Using Multiple Router Files

Generally, we will keep each router in its own file, and ``require`` them in the main application. This allows us to keep our code clean and our files short.

To do this with ``monstersRouter``, we would create a new file **monsters.js** and move all code related to /monsters requests into it.

```javascript
// monsters.js
const express = require('express');
const monstersRouter = express.Router();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    Name: 'manticore',
    age: 21
  }
}

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

module.exports = monstersRouter;
```

This code contains all the ``monsters`` specific code. In a more full-fledged API, this file would contain multiple routes. To use this router in another file, we use ``module.exports`` so that other files can access ``monstersRouter``. The only other new line of code ``require``d is that Express must be required in each file, since we’ll need to create a router with ``express.Router()``.

Our **main.js** file could then be refactored to import the ``monstersRouter``:

```javascript
// main.js
const express = require('express');
const app = express();
const monstersRouter = require('./monsters.js');

app.use('/monsters', monstersRouter);
```

In this example, the ``monstersRouter`` is required in **main.js** from **monsters.js** and used exactly as it was before.

## Instructions

1. Let’s start to refactor our /expressions routes to **expressions.js**.

Open the **expressions.js** file. Create an ``expressionsRouter`` instance of Express.Router.

Export ``expressionsRouter`` from that file with ``module.exports``. Remove your old ``expressionsRouter`` from **app.js**. ``require`` your ``expressionsRouter`` from **expressions.js** into **app.js** and make sure it is mounted at ``/expressions``.

Move your GET ``/expressions`` handler from **app.js** to **expressions.js**. You’ll have to also move the ``expressions`` array to that file. Finally, make sure that you move the ``seedElements(expressions)`` line into **expressions.js**.