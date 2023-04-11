import React from 'react';
import style from './FormsControl.module.css'

const FormControl = ({input, meta:{touched, error}, children}) => {     // REST operator  изучить
    debugger;
    const hasError = touched && error ;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}        
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {   
    const {input, meta, child,...restprops} = props;   // деструктуризация
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

// import React from 'react';
// import s from './FormsControl.module.css'
// import {Field} from 'redux-form';

// export const TextArea = ({input, meta, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : '')}>
//         <div>
//             <textarea { ...props} {...input}/>
//           </div> 
//           {hasError &&<span>{meta.error}</span>}
//           </div>
// }
// export const Input = ({input, meta, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : '')}>
//         <div>
//             <input { ...props} {...input}/>
//           </div> 
//           {hasError &&<span>{meta.error}</span>}
//           </div>
// }
// export const createField = ( placeholder, name, validators,component, props={},text='')=>(

// <div>
//     <Field placeholder ={placeholder} name={name}
//     validate={validators} component = {component}{...props}/>
//     {text}
// </div>)
