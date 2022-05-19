import React, {useState} from 'react'
import classes from './BurgerNav.module.scss'
import {Link} from 'react-scroll'
import {Burger} from "../burger/Burger";

export const BurgerNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.burger}>
                <Burger setCollapsed={setCollapsed} collapsed={onClick}/>
            </div>
            <ul className={collapsed ? `${classes.items} ${classes.show}` : `${classes.items}`}>
                <li><Link activeClass={classes.active}
                          to="main"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-90}
                          duration={1000}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                > Main</Link> </li>
                <li><Link activeClass={classes.active}
                          to="skills"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={1000}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                > Skills</Link> </li>
                <li><Link activeClass={classes.active}
                          to="projects"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={1000}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                > Projects</Link> </li>
                <li><Link activeClass={classes.active}
                          to="contacts"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                > Contacts</Link> </li>
            </ul>
        </nav>
    )
}