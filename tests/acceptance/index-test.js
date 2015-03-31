import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;
var server;

module('Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  },
});

test('index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('nav').length, 1, 'The page shows navbar');
  });
});
