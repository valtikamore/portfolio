import React from 'react'
import classes from './contact.module.scss'
export const Contact = (props) => {
    return (
        <li >
            <a href={props.link}>
                <img src={props.img} alt={props.imgAlt} className={classes.contact}/>
            </a>
        </li>
    )
}