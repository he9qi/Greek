import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;
var server;

module('BrowseTutors', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  },
});

test('tutors', function(assert) {
  visit('/tutors');

  andThen(function() {
    assert.equal(find('ul.tutors-list').length, 1, 'The page shows tutors list');
  });
});
