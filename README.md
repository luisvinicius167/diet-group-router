# diet-group-routes

![Diet Logo](http://i.imgur.com/Dasjkkp.png)

```javascript
  app.group('/users').then( app => {
    app.post('/register', isUserRegistered, controller.register);
    app.post('/login', controller.login);
    app.post('/logout', basicAuth, controller.logout);
  });
```  