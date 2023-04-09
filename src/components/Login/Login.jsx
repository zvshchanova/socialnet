import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from '../../components/common/FormControls/FormsControl'
import { required } from '../../utils/validation/validator';
import { login } from '../../redux/auth-reducer';
import { connect } from "react-redux"; 
import style from '../../components/common/FormControls/FormsControl.module.css';
import { Navigate } from "react-router-dom";

// store.getState().form

const LoginForm = (handleSubmit, error) =>{
    return (    
    <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input}
                validate={[required]}
                placeholder={"Email"} name={"email"} />
        </div>
        <div>
            <Field component={Input}
                validate={[required]}
                placeholder={"Password"} name={"password"} type="password"/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (login,isAuth) =>{
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        // alert('Login props.isAuth return <Redirect to={"/profile"}/>')
        // return  redirect("/profile")    
        return <Navigate to="/profile" />      

    }
    return <div> 
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth       //  redux-store :  "auth: authReducer,"
})
export default connect(mapStateToProps, {login}) (Login);           // HOC connect   login - thankcreator