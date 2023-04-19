import { ChangeEvent, FormEvent, useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormField] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormField({...formFields, [name]: value});
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
            await createAuthUserWithEmailAndPassword(formFields.email, formFields.password);
            setFormField(defaultFormFields);
        } catch (error) {
            const authError = error as AuthError;
            if (authError.code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Email already exists.');
            }
            console.error(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Name'
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange} />
                <FormInput label='Email'
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange} />
                <FormInput label='Password'
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <FormInput label='Confirm password'
                    required
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type="submit">
                    Sign up
                </Button>
            </form>
        </div>
    );

}

export default SignUp;