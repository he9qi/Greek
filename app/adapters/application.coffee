`import config from '../config/environment'`
`import DS from 'ember-data'`

ApplicationAdapter = DS.ActiveModelAdapter.extend
  # host: config.mipsy.proxyHost
  namespace: "api/users"

`export default ApplicationAdapter`
