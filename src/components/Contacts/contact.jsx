import React from 'react'
import classes from './contact.module.scss'
import { Image } from "../Image/Image";

export const Contact = (props) => {
    return (
        <li >
            <a href={props.link}>
                <Image type={props.img} className={classes.contact}/>
            </a>
        </li>
    )
}