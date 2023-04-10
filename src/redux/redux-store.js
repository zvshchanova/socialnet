// import { createStore } from 'redux'
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import ThunkMiddleware from 'redux-thunk'; // thunk as ThunkMiddleware
import { reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer';
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}
)
//let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

window._store_ = store;   //  We can check in any place in console  store.getState()

export default store;