import {ChangeEvent, FormEvent, useState } from "react";
import { loginWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";

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

    const loginUserWithEmail = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await loginWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }

        setFormValues(defaultFormValues);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={loginUserWithEmail}>
                <FormInput 
                    label='Email' 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                 />
                <FormInput 
                    label='Password'
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                 />
                <ButtonsContainer>
                    <Button type="submit">
                        Sing in
                    </Button>
                    <Button  buttonType={BUTTON_TYPE_CLASSES.google} onClick={loginUserWithGoogle}>
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>

        </SignInContainer>
    );
}

export default SignIn;