import React from 'react';
import style from './FormsControl.module.css'

const FormControl = ({input, meta, child,...props}) => {     // REST operator  изучить
    const hasError = meta.touched && meta.error ;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}        
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {   
    const {input, meta, child,...restprops} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
    )
}
export const Input = (props) => {  
    const {input, meta, child,...restprops} = props;
    return (
        <FormControl {...props}><input {...input} {...restprops}/></FormControl>
    )
}
