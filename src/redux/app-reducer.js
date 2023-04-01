import { getAuthUserData } from "./auth-reducer";


const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';

let initialState = {    
        initialised: false
    };

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {...state, initialised: true}        
        default:
            return state;
    }
};

export const initialisedSuccess = () => ({ type: INITIALISED_SUCCESS }); 

export const initialiseApp = () => (dispatch) => {    // redux-thunk
    let promise = dispatch(getAuthUserData());
    // dispatch(somethingelse())
    promise.then(() => {
        dispatch(initialisedSuccess())
    })
    // Promise.all([promise]).then(() => {   //  если промисов несколько помещаем их в массив
    //     dispatch(initialisedSuccess())
    // })
}

export default appReducer