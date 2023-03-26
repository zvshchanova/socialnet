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
        ]
  
};

export const dialogsReducer = (state = initialState,action) => {

    switch (action.type) {    
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: body}]
            };       
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

