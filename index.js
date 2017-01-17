module.exports = app => {
  app.group = (endpoint) => {
    const routes = Object.assign({}, app);
    [
      'get',
      'post',
      'head',
      'put',
      'delete',
      'patch',
      'trace',
      'options'
    ].forEach( method => {
      routes[method] = (...args) => {
          app[method].call(app, `${endpoint}${args[0]}`, ...args);
        }
    });
    return Promise.resolve(routes);
  }
}