/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/nprogress/nprogress.js');
app.import('bower_components/nprogress/nprogress.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
     destDir: 'assets'
});

module.exports = app.toTree();
