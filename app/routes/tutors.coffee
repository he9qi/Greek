`import Ember from 'ember'`
`import Tutor from './../models/tutor'`

TutorsRoute = Ember.Route.extend
  model: (params) ->
    @store.find "tutor"

`export default TutorsRoute`
