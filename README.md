# Middleware in redux toolkit
middleware is code that sits between an action being dispatched and the moment it reaches the reducer. It provides a powerful extension point to intercept, modify, or cancel actions, as well as to perform side effects like API calls and logging.

# Default MiddlewareWhen 
you use configureStore from Redux Toolkit, it automatically adds several useful middlewares by default:

- Redux Thunk: The standard tool for writing async logic (like fetching data) outside of components.
- Immutability Check: (Development only) Deeply compares state to detect accidental mutations, throwing an error if found.
- Serializability Check: (Development only) Warns if non-serializable values (like Promises or Functions) are put into the state or actions.
- Action Creator Check: (Development only) Detects if an action creator was accidentally dispatched without being called.

# Adding Custom Middleware
- To add your own middleware while keeping the defaults, use the middleware callback in configureStore and call getDefaultMiddleware().

<pre> ```javascriptimport { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  // Use .concat() or .prepend() to keep default middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})``` </pre>

# Key Specialized Middlewares in RTK
**Beyond the defaults, RTK provides specialized tools for specific patterns:** 
- **<u>Listener Middleware</u>:** A lightweight alternative to Sagas or Observables. It lets you run "effects" when specific actions are dispatched or state changes.
- **<u>RTK Query Middleware</u>:** Specifically required when using RTK Query to handle its advanced caching, polling, and invalidation features.- - **<u>Dynamic Middleware</u>:** Allows you to inject middleware into the store after initialization, which is useful for code-splitting or modular architectures.

# How Middleware Works (The "Triple Curry")
Under the hood, Redux middleware follows a specific functional structure consisting of three nested functions:
1. Outer: Receives the store API (dispatch and getState).
2. Middle: Receives the next middleware in the chain.
3. Inner: Receives the actual action and decides whether to pass it on using next(action).



## we are fetching data in redux mainly in 4 ways -
1. Custom Middleware API
2. Thank
3. Redux toolKit Query
4. Redux Saga -- not recommended

