`import config from '../config/environment'`
`import Firebase from 'firebase'`
`import FirebaseAdapter from 'emberfire/adapters/firebase'`

if config.environment == "test"
  ApplicationAdapter = DS.ActiveModelAdapter.extend
    namespace: "api"
else
  ApplicationAdapter = FirebaseAdapter.extend
    firebase: new Firebase(config.firebase)

`export default ApplicationAdapter`
