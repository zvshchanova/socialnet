import React from 'react';
import styles from './FormsControl.module.css'

const FormControl = ({input, meta, child,...props}) => {     // REST operator  изучить
    const hasError = meta.touched && meta.error ;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
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
// Refactoring:
// export const TextArea = ({input, meta, ...props}) => {   // все кроме input и meta      // REST operator  изучить
//     const hasError = meta.touched && meta.error ;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//             <textarea {...input} {...props}/>        
//             </div>
//             { hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {   
//     const hasError = meta.touched && meta.error ;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//             <textarea {...input} {...props}/>        
//             </div>
//             { hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }