import {useState } from "react";
import { loginWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';

const defaultFormValues = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formValues, setFormValues] = useState(defaultFormValues);
    const { email, password } = formValues;

    const loginUserWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const loginUserWithEmail = async (event) => {
        event.preventDefault();
        try {
            await loginWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
            alert(error.code);
        }

        setFormValues(defaultFormValues);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={loginUserWithEmail}>
                <FormInput label='Email' inputOptions={{
                    required: true,
                    type: "email",
                    name: "email",
                    value: email,
                    onChange: handleChange,
                }} />
                <FormInput label='Password' inputOptions={{
                    required: true,
                    type: "password",
                    name: "password",
                    value: password,
                    onChange: handleChange,
                }} />
                <div className="buttons-container">
                    <Button children="Sign up" type="submit">
                        Sing in
                    </Button>
                    <Button  buttonType="google" buttonOptions={{
                        type: 'button',
                        onClick: loginUserWithGoogle
                    }}>
                        Google sign in
                    </Button>
                </div>
            </form>

        </div>
    );
}

export default SignIn;