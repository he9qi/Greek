`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType)
Router.map ->
  @resource 'tutors', path: '/tutors'
  @resource 'tutor', path: '/tutors/:tutor_id'

`export default Router`
