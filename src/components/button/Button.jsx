import React from 'react'
import classes from './button.module.scss'
import classNames from "classnames";
import {Link} from "react-scroll";


export const Button = (props) => {
    return (
        <>
            <button className={classNames(classes.btn, {
                    [classes.btn__outline]: props.outline
                })} type={props.type}>
                <Link activeClass={classes.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={0}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                > {props.title}</Link></button>
        </>


    )
}