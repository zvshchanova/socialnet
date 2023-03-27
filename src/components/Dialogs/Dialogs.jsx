import React from "react"
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import {Redirect} from 'react-router-dom'  
import { Link } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { TextArea } from '../../components/common/FormControls/FormsControl'
import { required, maxLengthCreator } from '../../utils/validation/validator';

const maxLength50 = maxLengthCreator(10);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsItems = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messageItems = state.messagesData.map( el => <Message message={el.message} id={el.id} key={el.id}/>)
    
    let newMessageBody = state.newMessageBody;

//    if(!props.isAuth) return <Link to={'./login'}/>   //!!!  Redirect

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsItems }
            </div>
             <div className={style.messages}>
             <div>{ messageItems }</div>
             <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div> 
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
    <div >
        <Field component={TextArea} 
            validate={[required, maxLength50]} 
            placeholder={"Enter your message"} name="newMessageBody" />
    </div>        
    <div>
        <button>Send</button>
    </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;