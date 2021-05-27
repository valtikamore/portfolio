import React from 'react'
import classes from './Burger.module.scss'

export const Burger = (props) => {

    return (
            <div className={classes.burger} >
                <input id="burger" type="checkbox" onClick={props.collapsed}/>
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
    )
}