import React from 'react'
import classes from './Nav.module.css'
export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#">Main</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}