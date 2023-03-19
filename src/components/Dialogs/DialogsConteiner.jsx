import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
// import { StoreContext } from '../../redux/storeContext';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {dispatch(sendMessageCreator())}
        
    }
}

const DialogsConteiner = connect(mapStateToProps , mapDispatchToProps )(Dialogs)

export default DialogsConteiner;