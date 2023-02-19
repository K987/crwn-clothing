import './button.styles.scss'
import React, { ReactNode } from 'react'

export enum BUTTON_TYPE_CLASSES {
    google = 'google-sign-in',
    inverted = 'inverted',
}

type ButtonProps = {
    children: ReactNode,
    buttonType?: BUTTON_TYPE_CLASSES,
    buttonOptions?: object
}

const Button = ({children, buttonType, buttonOptions}: ButtonProps) => {

    return (
        <button className={`button-container ${ buttonType }`} {...buttonOptions}>
            {children}
        </button>
    );
};

export default Button;