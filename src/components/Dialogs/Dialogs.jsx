import React from "react"
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let dialogsItems = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    let messageItems = props.messagesData.map( el => <Message message={el.message} id={el.id} key= {el.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsItems }
            </div>
             <div className={style.messages}>
             { messageItems }
             </div> 
        </div>
    )
}

export default Dialogs;