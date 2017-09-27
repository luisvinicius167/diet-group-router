# diet-group-routes
> A grouping route module for Diet.js.

![Diet Logo](http://i.imgur.com/Dasjkkp.png)

## Changelog
0.1.2 - now returns directly the group Object use @0.0.2 for Promise interface 



## Migrating to 0.1.2 
```js
const server = require('diet');
const app = server();

// require the diet-group-router module
require('diet-group-router')(app);
const users = app.group('/users')

Promise.resolve(users).then(app => {
  app.post('/register', controller.register);
})

Promise.resolve(app.group('/api')).then(app => {
  app.post('/list', controller.list);
})

```



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
  const users = app.group('/users')
  users.post('/register', controller.register);
 ``` 
