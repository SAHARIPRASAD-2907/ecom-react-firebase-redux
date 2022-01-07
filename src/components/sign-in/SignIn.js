import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../Button/CustomButton";
import {signInWithGoogle} from "../../firebase/connect"


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event=> {
        event.preventDefault()
        console.log(this.state.email,this.state.password)
        this.setState({
            email: "",
            password: ""
        })
    }

    handleEmailChange = event=> {
        const emailValue = event.target.value;
        this.setState({
            email:emailValue
        })
    }
    handlePasswordChange = event=> {
        const passwordValue = event.target.value;
        this.setState({
            password:passwordValue
        })
    }

    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'} type={'email'}
                           handleChange={this.handleEmailChange} value={this.state.email} required label={'email'}/>
                    <FormInput name={'password'} type={'password'}
                           handleChange={this.handlePasswordChange} required value={this.state.password} label={'password'}/>
                    <div className={'buttons'}>
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn