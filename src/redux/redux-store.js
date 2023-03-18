// import { createStore } from 'redux'
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import ThunkMiddleware from 'redux-thunk'; // thunk as ThunkMiddleware


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
}
)
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
window.store = store;   //  We can check in any place in console  store.getState()

export default store;