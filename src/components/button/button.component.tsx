import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => {
    /*
        dynamic approch:
        ({
            [BUTTON_TYPE_CLASSES.base]: BaseButton,
            ....
        }[buttonType]);
    */
    switch(buttonType) {
        case BUTTON_TYPE_CLASSES.base:
            return BaseButton;
        case BUTTON_TYPE_CLASSES.google:
            return GoogleSignInButton;
        case BUTTON_TYPE_CLASSES.inverted:
            return InvertedButton;
    }
};

type ButtonProps = {
    children: ReactNode,
    buttonType?: BUTTON_TYPE_CLASSES,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, buttonType, ...otherProps}: ButtonProps) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;