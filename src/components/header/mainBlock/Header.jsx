import React from 'react'
import classes from './Header.module.css'
import {Navigation} from "./navigation/Nav";
import container from '../../../styles/Container.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <div  className={` ${container.container} ${classes.container}`}>
                <Navigation/>
            </div>
        </header>
    )
}

//