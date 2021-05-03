import React from 'react'
import classes from './aboutMe.module.css'
import container from '../../styles/Container.module.css'
import {Contacts} from "../../components/contacts/contacts";


export const AboutMe = () => {
    return (
        <article
            className={
                `${classes.aboutMe} `}>
            <section  className={`${container.container} ${classes.container}`}>
                <section className={classes.aboutMe__block}>
                    <p className={classes.aboutMe__uptitle}>Hello!</p>
                    <h2 className={classes.aboutMe__title}>I'm Valentine Kal'chevski</h2>
                    <p className={classes.aboutMe__subtitle}>Frontend Developer</p>
                    <div>
                      <Contacts/>
                    </div>
                </section>

                <div className={classes.aboutMe__photo} />

            </section>
        </article>
    )
}