const createStore = require('./miniredux');

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

let store = createStore(counter, 10);

let unsubsribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
unsubsribe();
store.dispatch({ type: 'DECREMENT' });