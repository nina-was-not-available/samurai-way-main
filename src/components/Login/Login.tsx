import React from 'react';
import classes from './Login.module.css'
import {Field, FormProps, InjectedFormProps, reduxForm} from "redux-form";
import {Checkbox, Input} from "../common/FormControl";
import {requiredField} from "../../utils/validators/validator";
import {AppThunk, RootState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapStateLoginPT = {
    isAuth: boolean
}
type MapDispatchLoginPT = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void;
}


const MapStateLoginProps = (state: RootState):MapStateLoginPT => {
    return {
        isAuth: state.auth.isAuth
    }
}
type LoginPT = MapStateLoginPT & MapDispatchLoginPT

const Login = (props: LoginPT) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.login}>
           <div className={classes.container}>
            <h1> Login to your account</h1>
               <ReduxLoginForm onSubmit={onSubmit}/>
           </div>
        </div>
    );
};

export default connect(MapStateLoginProps, {loginThunk})(Login);



const LoginForm: React.FC <InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.inputContainer}>
                <Field component={Input} name={'email'} placeholder={'Enter your email'} type={"email"} validate={[requiredField]}/>
                <Field component={Input}  name={'password'} placeholder={'Enter your password'} type={"password"} validate={[requiredField]}/>
                {props.error && <div className={classes.error}> {props.error}</div>}
                <div className={classes.buttonGroup}>
                    <button className={classes.singIn}>Sing in</button>
                    <div><Field component={Checkbox} name={'rememberMe'} type={'checkbox'}/>Remember me</div>
                </div>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)