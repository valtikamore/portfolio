import React from 'react'
import classes from './Nav.module.scss'

export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a data-goto='Main' href="#">Main</a></li>
                <li><a data-goto='Skills' href="#">Skills</a></li>
                <li><a data-goto='Projects' href="#">Projects</a></li>
                <li><a data-goto='Contacts' href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}