import React from 'react'
import classes from './Header.module.css'
import {Navigation} from "./navigation/Nav";


export const Header = () => {
    return (
        <header className={classes.header}>
            <Navigation/>
        </header>
    )
}