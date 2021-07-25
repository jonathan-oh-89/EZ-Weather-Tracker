import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { zipcodeWeatherReducer } from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



const rootReducer = combineReducers({ zipcodeWeatherReducer });

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunk))


const store = createStore(
    persistedReducer,
    middlewareEnhancer
);


let persistor = persistStore(store)

// const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunk))
// const store = createStore(combineReducers({ zipcodeWeatherReducer }), middlewareEnhancer);

export { store, persistor };
