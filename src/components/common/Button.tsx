import React from 'react';
import styles from './common.module.css'
import {ButtonProps} from "antd";

type ButtonPT = {
    onClick: () => void
    name: string
    className?: string
    style?: {}
    disabled?: boolean
}

const Button = (props: ButtonPT) => {
    const onClickHandler = () => {
        props.onClick()
    }
    return (
        <button onClick={onClickHandler} className={
            props.className? props.className : styles.button } style={props.style} disabled={props.disabled}>
            {props.name}
        </button>
    );
};

export default Button;