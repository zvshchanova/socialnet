const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {    
        dialogsData: [
          {id: 1, name: 'Roman'},
          {id: 2, name: 'Sophia'},
          {id: 3, name: 'Alex'}
        ],
        messagesData: [
          {id: 1, message: 'Hi!'},
          {id: 2, message: 'Hello!'},
          {id: 3, message: 'Yo!'},
        ],
        newMessageBody: ""      
};

export const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 4, message: body})
            return state;
        default:
            return state;

    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: text});