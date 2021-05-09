import React from 'react'
import classes from './Header.module.scss'
import {Navigation} from "./navigation/Nav";
import container from '../../../styles/Container.module.scss'

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