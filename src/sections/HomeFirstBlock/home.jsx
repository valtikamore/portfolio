import React from 'react'
import classes from './home.module.scss'
import container from '../../styles/Container.module.scss'
import {Contacts} from "../../components/contacts/contacts";

export const Home = () => {
    return (
        <article className={`${classes.home} `}>
            <section
                className={`${container.container}
                 ${classes.container}`}>
                <section className={classes.home__block}>
                    <p className={classes.home__uptitle}>Hello!</p>
                    <h2 className={classes.home__title}>I'm Valentine Kalchevski</h2>
                    <p className={classes.home__subtitle}>Front-end Developer</p>
                    <Contacts/>
                </section>

                <div className={classes.home__photo}>

                </div>

            </section>
        </article>
    )
}