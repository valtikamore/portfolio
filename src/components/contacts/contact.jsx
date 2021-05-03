import React from 'react'
import classes from './contact.module.css'
export const Contact = (props) => {
    return (
        <li className={classes.contact}><a href="#">{props.children}</a></li>
    )
}