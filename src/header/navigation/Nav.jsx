import React from 'react'
import classes from './Nav.module.scss'
import {Link, AnimatedScroll as scroll} from 'react-scroll'


export const Navigation = () => {
    let arr =[
        {name: 'main' ,offset:-90},
        {name: 'skills'},
        {name: 'projects'},
        {name: 'contacts',duration:500}
        ]
    let navLinks = arr.map((el, i) => {
            return(
                <li key={i}>
                    <Link
                        activeClass={classes.active}
                        to={el.name}
                        delay={0}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={el.offset ? el.offset : 0}
                        duration={el.duration ? el.duration : 1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >{el.name}</Link>
                </li>
            )
        })

    return (
        <nav className={classes.nav}>
            <ul>
                {navLinks}
            </ul>
        </nav>
    )
}