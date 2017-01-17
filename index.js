module.exports = app => {
  app.group = (endpoint) => {
    const routes = Object.assign({}, app);
    const methods = [
      'get',
      'post',
      'head',
      'put',
      'delete',
      'patch',
      'trace',
      'options'
    ];
    for (let i in routes) {
      if (methods.includes(i)) {
        routes[i] = (...args) => {
          app[i].call(app, `${endpoint}${args[0]}`, ...args);
        }
      }
    };
    return Promise.resolve(routes);
  }
}