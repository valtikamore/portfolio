import React from 'react'
import classes from './Nav.module.scss'
import {Link} from 'react-scroll'


export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
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