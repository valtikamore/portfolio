import React from 'react'
import classes from './aboutMe.module.css'
import container from '../../styles/Container.module.css'


export const AboutMe = () => {
    return (
        <article
            className={
                `${classes.aboutMe} `}>
            <section  className={`${container.container} ${classes.container}`}>
                <section className={classes.aboutMe__text}>
                    <span>Hi There</span>
                    <h1>I am Valentine Kal'chevski</h1>
                    <p>Frontend Developer.</p>
                </section>
                <div className={classes.aboutMe__photo} />
            </section>
        </article>
    )
}