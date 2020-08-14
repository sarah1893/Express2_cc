# Code Challenge

Code Challenge

## Instructions

1. Write a route to handle PUT requests to ``/currencies/:name/countries``.

The ``:name`` param represents the currency name in the ``currencies`` object. The updated array of countries that use this currency will be sent in a query.

This route handler should replace the ``countries`` array of the correct single-currency object with an updated array from the query. It should send the updated array as a response.

> Hint
Checkout the Express docs for help on using [req.params](http://expressjs.com/en/api.html#req.params) and [req.query](http://expressjs.com/en/api.html#req.query)!