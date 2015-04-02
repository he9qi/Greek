import DS from 'ember-data';
import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;
var server;

module('BrowseTutors', {
  setup: function() {
    App   = startApp();
    var tutors = [
      {
        id: 1,
        name: 'Bugs Bunny',
        intro: "This is bunny from bugs movie. I've bean leav in asshly.",
        avatar_url: "https://avatars0.githubusercontent.com/u/29342?v=3&s=40"
      },
      {
        id: 2,
        name: 'Wile E. Coyote',
        intro: "Hi, I'm John. I'm from Cape Town, a beautiful city in South Africa. I've also lived in Florida, New York, London",
        avatar_url: "https://avatars0.githubusercontent.com/u/29342?v=3&s=40"
      },
      {
        id: 3,
        name: 'Yosemite Sam',
        intro: "Hi, I'm John. I'm from Cape Town, a beautiful city in South Africa. I've also lived in Florida, New York, London",
        avatar_url: "https://avatars0.githubusercontent.com/u/29342?v=3&s=40"
      }
    ];

    server = new Pretender(function() {
      this.get('/api/tutors', function(request){
        var all = (tutors);
        return [200,
          {"Content-Type": "application/json"},
          JSON.stringify({tutors: tutors})
        ];
      });
    });
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  },
});

test('tutors', function(assert) {
  visit('/tutors');

  andThen(function() {
    assert.equal(find('ul.tutors li').length, 3, 'The page shows 3 tutors');
  });
});
