import React from 'react'
import classes from './Header.module.scss'
import {Navigation} from "./navigation/Nav";
import {BurgerNavigation} from "./burgerNavigation/BurgerNav";

export const Header = () => {
    return (
        <header className={classes.header}  id={'main'}>
            <div className={ classes.fixed } >
                <BurgerNavigation/>
                <Navigation/>
            </div>
        </header>
    )
}

