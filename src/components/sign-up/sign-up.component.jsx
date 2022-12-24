import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormField] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formFields, [name]: value});
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (formFields.password !== formFields.confirmPassword) {
            alert("Password doesn't match");
            return;
        }
        if (!formFields.email || !formFields.password) {
            alert("Invalid input");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password);
            await createUserDocumentFromAuth({uid: user.uid, displayName: name, email: email});
            setFormField(defaultFormFields);
        } catch (error) {
            alert(error.code);
            console.error(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput label='Name' inputOptions={{
                    required: true,
                    type: "text",
                    name: "name",
                    value: name,
                    onChange: handleChange,
                }} />
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
                <FormInput label='Confirm password' inputOptions={{
                    required: true,
                    type: "password",
                    name: "confirmPassword",
                    value: confirmPassword,
                    onChange: handleChange,
                }} />
                <Button children="Sign up" type="submit">
                    Sign up
                </Button>
            </form>
        </div>
    );

}

export default SignUp;