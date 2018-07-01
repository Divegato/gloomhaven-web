import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'scenario',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Scenario = require('./containers/ScenarioContainer').default
      const reducer = require('./modules/scenario').default

      /*  Add the reducer to the store on key 'scenario'  */
      injectReducer(store, { key: 'scenario', reducer })

      /*  Return getComponent   */
      cb(null, Scenario)

    /* Webpack named bundle   */
    }, 'scenario')
  }
})
