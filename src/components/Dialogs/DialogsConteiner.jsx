import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsConteiner = connect(mapStateToProps , mapDispatchToProps )(AuthRedirectComponent)

export default DialogsConteiner;