# Refactoring Expressions Routes

Now that you’ve learned about nested route matching, let’s refactor the rest of the ``/expressions`` routes into **expressions.js**.

## Instructions

1. Move all your /expressions routes to your router into **expressions.js**. Make sure that they still match the same request paths, and remove the duplicate code from **app.js**.

Move the following routes to **expresions.js**:

- GET /expressions/:id
- PUT /expressions/:id
- POST /expressions
- DELETE /expressions/:id

Remember to change the paths for each route handler as you move them, as they should already be mounted at /expressions inside **expressions.js**.

Make sure that you still ``require`` the same helper functions from **utils.js** in **expressions.js**.

> Hint
You’ll need all these helper functions in **expressions.js**: ``getElementById``, ``getIndexById``, ``updateElement``, ``seedElements``, ``createElement``