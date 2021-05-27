import React, {useState} from 'react'
import classes from './Header.module.scss'
import {Navigation} from "./navigation/Nav";
import {Burger} from "./burger/Burger";

export const Header = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <header className={classes.header}  id={'main'}>
            <div  className={ classes.sticky } >
                <Burger/>
                <BurgerNavigation/>
                <Navigation/>
            </div>

        </header>
    )
}

