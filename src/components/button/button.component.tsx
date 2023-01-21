import { JsxElement } from 'typescript'
import './button.styles.scss'
import React, { ReactNode } from 'react'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

type ButtonProps = {
    children: ReactNode,
    buttonType?: string,
    buttonOptions?: object

}

const Button = ({children, buttonType, buttonOptions}: ButtonProps) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...buttonOptions}>
            {children}
        </button>
    );

}

export default Button;