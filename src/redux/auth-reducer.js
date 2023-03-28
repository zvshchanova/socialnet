import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {    
        id: null,
        email: null,
        login: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}        
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} }); 

export const getAuthUserData = () => (dispatch) => {    // Thank
    authAPI.me()
        .then(response => {            
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));  
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {   // Thank
    authAPI.login( email, password, rememberMe)  
        .then(response => {            
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())   
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