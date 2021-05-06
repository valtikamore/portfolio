import React from 'react'
import classes from './button.module.css'
import classNames from "classnames";
import CV from '../../assets/pdfCV/Grid Design Resumes (1).pdf (4).pdf'

export const Button = (props) => {
    return (
        <>
            {props.download ? <button className={classNames(classes.btn, {
                    [classes.btn__outline]: props.outline
                })} type={props.type}><a href={CV} download>{props.title}</a></button>
                : <button className={classNames(classes.btn, {
                    [classes.btn__outline]: props.outline
                })} type={props.type}>{props.title}</button>}
        </>


    )
}