import React from "react"
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsItems = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messageItems = state.messagesData.map( el => <Message message={el.message} id={el.id} key={el.id}/>)
    
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsItems }
            </div>
             <div className={style.messages}>
             <div>{ messageItems }</div>
             <div>
                <div><textarea value={newMessageBody} 
                               onChange= {onNewMessageChange}
                placeholder="Enter your message"></textarea></div>        
                <div><button onClick={onSendMessageClick}>Send</button></div>
             </div>

            </div> 
        </div>
    )
}

export default Dialogs;