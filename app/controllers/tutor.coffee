`import Ember from 'ember'`

TutorController = Ember.ObjectController.extend
  tutor: Ember.computed.alias "model"

`export default TutorController`
