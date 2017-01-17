# diet-group-routes
> A grouping route module for Diet.js.

![Diet Logo](http://i.imgur.com/Dasjkkp.png)

## Install
```
npm install diet-group-router
```

## The Gist:


```javascript
  const server = require('diet');
  const app = server();

  // require the diet-group-router module
  require('diet-group-router')(app);

  // Now you have the app.group method available
  app.group('/users').then( app => {
    //users/register
    app.post('/register', controller.register);
    //users/login
    app.post('/login', controller.login);
    //users/logout
    app.post('/logout', controller.logout);
  });

  app.listen(8000)
```