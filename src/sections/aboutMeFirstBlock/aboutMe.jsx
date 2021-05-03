import React from 'react'
import classes from './aboutMe.module.css'
import container from '../../styles/Container.module.css'


export const AboutMe = () => {
    return (
        <article
            className={
                `${classes.aboutMe} `}>
            <section  className={`${container.container} ${classes.container}`}>
                <section className={classes.aboutMe__block}>
                    <p className={classes.aboutMe__uptitle}>Hello!</p>
                    <h1 className={classes.aboutMe__title}>I am Valentine Kal'chevski</h1>
                    <p className={classes.aboutMe__subtitle}>Frontend Developer.</p>
                </section>
                <div className={classes.aboutMe__photo} />
            </section>
        </article>
    )
}