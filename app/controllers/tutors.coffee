`import Ember from 'ember'`

TutorsController = Ember.ArrayController.extend
  tutors: Ember.computed.alias "model"

`export default TutorsController`
