import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from '../../components/common/FormControls/FormsControl'
import { required, maxLengthCreator } from '../../utils/validation/validator';

// store.getState().form

const LoginForm = (props) =>{

    return (    
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                validate={[required]}
                placeholder={"Login"} name={"login"} />
        </div>
        <div>
            <Field component={Input}
                validate={[required]}
                placeholder={"Password"} name={"password"} />
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div> 
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;