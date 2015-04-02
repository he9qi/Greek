import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('tutor', 'Tutor Model', {
  beforeSetup: function() {
  }
});

test('Tutor is valid and has name', function (assert) {
  var store = this.store();
  var tutor = this.subject({
    name: 'John Carr',
    info: "Hi, I'm John. I'm from Cape Town, a beautiful city in South Africa. I've also lived in Florida, New York, London.",
    avatar_url: "http://avatar.png"
  });

  assert.ok(tutor);
  assert.ok(tutor instanceof DS.Model);
  assert.equal(tutor.get('name'), 'John Carr');
});
