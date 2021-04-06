import React from 'react'
import classes from './button.module.css'

export const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.class}`}>{props.title}</button>
    )
}