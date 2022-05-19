import React from 'react'
import classes from './home.module.scss'
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical'
import Tilt from 'react-tilt'
import {ScrollIcon} from "./Scroll_icon";
import {Links} from "../../../../components/Contacts/links";
import {Image} from "../../../../components/Image/Image";

export const Home = () => {

    return (
        <article className={`${classes.home} `} >
            <section className={`${classes.container}`}>
                <Fade left>
                    <section className={classes.home__block}>
                        <Typical
                            className={classes.home__uptitle}
                            steps={['Hello!', 2000, 'I’am', 100, 'I’am glad ', 100, 'I’am glad to', 100, 'I’am glad to see you!', 100, 'I’am glad to see you!', 1000]}
                            loop={10}
                            wrapper="p"
                        />
                        <h2 className={classes.home__title}>I'm Valentine Kalchevski</h2>
                        <p className={classes.home__subtitle}>Front-end Developer</p>
                        <Links/>
                    </section>
                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={{
                        reverse: false,
                        max: 10,
                        scale: 1.05,
                        speed: 200,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                    }}>
                        <Image className={classes.mainImage__block} type={'mainBack'}/>
                    </Tilt>
                </Fade>
                <ScrollIcon/>
            </section>
        </article>
    )
}
