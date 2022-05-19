import React from 'react'
import classNames from "classnames";
import {Link} from "react-scroll";

import classes from './button.module.scss'

export const Button = (props) => {
    return (
        <>
            <button
                className={classNames(classes.btn, {
                    [classes.btn__outline]: props.outline
                })}
                type={props.type}
            >
                <Link
                    to="contacts"
                    spy
                    smooth
                    hashSpy
                    offset={0}
                    duration={500}
                    isDynamic
                    ignoreCancelEvents={false}
                > {props.title}</Link></button>
        </>
    )
}
