# Code Challenge

Code Challenge

## Instructions

1. Create two routers - ``mountainsRouter`` and ``mountainRangesRouter``. Mount them at ``/mountains`` and ``/mountain-ranges``, respectively.

Create a route handler with ``mountainsRouter`` to send back the ``mountains`` array in response to a GET /mountains request.

Create a route handler with mountainRangesHandler to send back the ``mountainRanges`` array in response to a GET /mountain-ranges request.

> Hint
Use ``app.use()`` to mount the routers at their specific base paths, and then set up ``.get()`` handlers for each router at their base path, ``'/'``.