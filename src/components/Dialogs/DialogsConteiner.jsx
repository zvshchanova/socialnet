import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
// import { StoreContext } from '../../redux/storeContext';
import { connect } from "react-redux";


// const DialogsConteiner = () => {

//     return (
//         <StoreContext.Consumer> 
//         { store => {
//                 let state = store.getState().dialogsPage;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//         return(
//         <Dialogs updateNewMessageBody={onNewMessageChange} 
//         sendMessage={onSendMessageClick}
//         dialogsPage={state}
//         />
//         )
//     }
// }
// </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (
            dispatch(sendMessageCreator())
        )

    }
}

const DialogsConteiner = connect(mapStateToProps , mapDispatchToProps )(Dialogs)

export default DialogsConteiner;