function createStore(reducer, initialState){
    let currentReducer = reducer;
    let currentState = initialState;
    let listener = () => {};

    function getState(){
        return currentState;
    }
    
    function dispatch(action){
        currentState = currentReducer(currentState, action);
        listener();
        return action;
    }

    function subscribe(newListener){
        listener = newListener;
        return function unsubsribe(){
            listener = () => {};
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
};

module.exports = createStore;