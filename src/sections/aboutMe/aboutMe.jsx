import React from 'react'
import {Title} from "../../components/SectionTitle/Title";
import {Button} from "../../components/button/Button";
import container from "../../styles/Container.module.css";
import classes from './aboutMe.module.css'

export const AboutMe = () => {
    return (
        <div className={classes.aboutMe__block}>
            <article className={`${container.container} ${classes.container}`}>
                <div className={classes.photo}>

                </div>
                <section className={classes.aboutMe__article}>
                    <Title>
                        About me
                    </Title>
                    <p className={classes.aboutMe__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeracita aation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className={classes.aboutMe__block__button__block}>
                        <Button title='Hire me'></Button>
                        <Button title='Download cv' outline></Button>
                    </div>

                </section>
            </article>
        </div>

    )
}