import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import createReducer from "./reducers";


export default function configureStore(initialState = {}, sharedFunctions) {
    const sagaMiddleware = createSagaMiddleware({
      sagaMonitor: {
        //Use effectTriggered,effectRejected for effects based Consoles
      },
    });
  
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    let middlewares = [
      sagaMiddleware
    ];
  
    const enhancers = [applyMiddleware(...middlewares)];

    const  composeEnhancers =
      __DEV__ &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
    /* eslint-enable */
  
    const store = createStore(
      createReducer(),
      // composeWithDevTools(),
      initialState,
      composeEnhancers(...enhancers)
    );
  
    // Extensions
    store.runSaga = sagaMiddleware.run(rootSaga);
    store.asyncReducers = {}; // Async reducer registry
    store.asyncSagas = {}; // Async saga registry
  
    // Make reducers hot reloadable, see http://mxs.is/googmo
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        import("./reducers").then((reducerModule) => {
          const createReducers = reducerModule.default;
          const nextReducers = createReducers(store.asyncReducers);
  
          store.replaceReducer(nextReducers);
        });
      });
    }
  
    // This wakes up all the sagas that is set up in the rootSaga and makes them listen to relevant actions the action creators call.
    //   sagaMiddleware.run(rootSaga);
    return store;
  }
  