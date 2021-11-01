import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {PostReducer} from "./reducers/postReducer";
import thunk from "redux-thunk";
import {AuthReducer} from "./reducers/authReducer";

let reducers = combineReducers({
    post: PostReducer,
    auth: AuthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk) ));

export default store;