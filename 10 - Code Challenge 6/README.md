# Code Challenge

Code Challenge

## Instructions

1. Write a route to handle DELETE requests to ``/puddings/:flavor``. It should delete the correct pudding and send a 204 response if the pudding name exists and send a 404 response if it does not.

You can use the helper functions ``findPuddingIndex`` to find the index of the pudding by flavor and ``deletePuddingAtIndex`` to delete a pudding from the ``puddingFlavors`` array by index.

> Hint
``findPuddingIndex`` returns -1 if a pudding name is not included in ``puddingFlavors``.