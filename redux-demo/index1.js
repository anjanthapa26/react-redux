const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers


// creating a logger (middleware) in the redux application 
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'



const buyCake = () => {
    return {
        type:BUY_CAKE
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}


const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state=initialCakeState,action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes - 2
        }

        default: return state
    }
}
const iceCreamReducer = (state=initialIceCreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: return state
    }
}

// combine reducer 

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));

const unsubscribe = store.subscribe(() =>{})

store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
