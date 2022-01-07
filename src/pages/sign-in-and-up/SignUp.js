import React from "react";
import "./SignUp.scss";
import SignIn from "../../components/sign-in/SignIn";

class SignUp extends React.Component{
    render() {
        return(
            <div className={"sign-in-and-sign"}>
                <SignIn/>
            </div>
        )
    }
}

export default SignUp;