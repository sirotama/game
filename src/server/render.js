const render = require('koa-swig');
const path = require('path');
var co = require('co');

module.exports = function(app) {
  app.context.render = co.wrap(render({
    root: path.join(__dirname, '/../client/'),
    autoescape: true,
    ext: 'html',
    cache: false
  }));
};
