# Express.Router

An Express router provides a subset of Express methods. To create an instance of one, we invoke the ``.Router()`` method on the top-level Express import.

To use a router, we *mount* it at a certain path using ``app.use()`` and pass in the router as the second argument. This router will now be used for all paths that begin with that path segment. To create a router to handle all requests beginning with ``/monsters``, the code would look like this:

```javascript
const express = require('express');
const app = express();

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

const monstersRouter = express.Router();

app.use('/monsters', monstersRouter);

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  If (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});
```

Inside the ``monstersRouter``, all matching routes are assumed to have ``/monsters`` prepended, as it is mounted at that path. ``monstersRouter.get('/:id')`` matches the full path ``/monsters/:id``.

When a GET /monsters/1 request arrives, Express matches ``/monsters`` in app.use() because the beginning of the path (``'/monsters'``) matches. Express’ route-matching algorithm enters the ``monstersRouter``‘s routes to search for full path matches. Since ``monstersRouter.get('/:id)`` is mounted at ``/monsters``, the two paths together match the entire request path (``/monsters/1``), so the route matches and the callback is invoked. The ``'godzilla'`` monster is fetched from the ``monsters`` array and sent back.

## Instructions

1. Create an ``expressionsRouter`` instance of Express.Router. Mount it at ``/expressions`` at your base app level with ``app.use``.

After doing so, create a route for your ``expressionsRouter`` that will send all expressions for a GET request.

> Hint
Remember, if the ``expressionsRouter`` is mounted properly at ``/expressions``, the GET request for all expressions will use the ``'/'`` path inside the `expressionsRouter`.