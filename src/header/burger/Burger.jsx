import React, {useState} from 'react'
import classes from './Burger.module.scss'

export const Burger = () => {

    return (
            <div className={classes.burger}>
                <input id="burger" type="checkbox" />
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
    )
}