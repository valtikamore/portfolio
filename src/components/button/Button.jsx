import React from 'react'
import classes from './button.module.css'
import classNames from "classnames";

export const Button = (props) => {
    return (
        <button className={classNames(classes.btn,{
            [classes.btn__outline] : props.outline
        })} type={props.type}>{props.title}</button>
    )
}