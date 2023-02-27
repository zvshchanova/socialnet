import React from "react"
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";


const DialogsConteiner = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsPage={state}
        />
    )
}

export default DialogsConteiner;