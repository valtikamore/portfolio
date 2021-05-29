import React from 'react'
import {Title} from "../../../components/SectionTitle/Title";
import {Button} from "../../../components/button/Button";
import classes from './aboutMe.module.scss'
import CV from '../../../assets/pdfCV/CV.pdf'
import port from '../../../assets/PortImg.jpg'
import Fade from "react-reveal/Fade";

export const AboutMe = () => {
    return (
        <div className={classes.aboutMe__block} >
            <article className={` ${classes.container}`}id={'about'}>
                <Fade left>
                    <div className={classes.aboutMe__photowrapper}>
                        <img src={port} className={classes.aboutMe__photo}>

                        </img>
                    </div>
                </Fade>
                <Fade right>
                    <section className={classes.aboutMe__article}>
                        <Title>
                            About me
                        </Title>
                        <p className={classes.aboutMe__text}>
                            Front-end developer with experience in
                            creating SPA using React, Redux, HTML, CSS,
                            JS./TS.
                        </p>
                        <p className={classes.aboutMe__text}> My free time is dedicated to Codewars,
                            programming tutorials and educational books.
                            I'm expanding the horizon in back-end way.
                            In the future I see myself as a Full Stack
                            Developer.</p>
                        <p className={classes.aboutMe__text}> I would like to find a project work/full-time job
                            in a creative company with up-to-date tasks
                            and collaborative team!</p>

                        <div className={classes.aboutMe__block__button__block}>
                            <Button title='Hire me' link={'contacts'}></Button>
                            <a href={CV} target={'_blank'} className={classes.downloadCV}>Download cv</a>
                        </div>

                    </section>
                </Fade>


            </article>
        </div>

    )
}