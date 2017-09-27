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
  const users = app.group('/users')
  //users/register
  users.post('/register', controller.register);
  //users/login
  users.post('/login', controller.login);
  //users/logout
  users.post('/logout', controller.logout);
  
  var api = app.group('/api')
  //api/list
  api.post('/list', controller.list);
  
  app.listen(8000)
```

## API

```app.group```: return 
```javascript
  app.group('/users')
  app.post('/register', controller.register);
 ``` 
