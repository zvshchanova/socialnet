import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {    
        id: null,
        email: null,
        login: null,
};

export const authReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}        
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} }); 

export const getAuthUserData = () => (dispatch) => {    // redux-thunk
    return authAPI.me()
        .then(response => {            
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));  
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {   // redux-thunk
    authAPI.login( email, password, rememberMe)  
        .then(response => {            
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())   
            } else {
               
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const logout = () => (dispatch) => {   // Thankcreator   
    authAPI.logout()
        .then(response => {            
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));  
            }
        });
}
export default authReducer