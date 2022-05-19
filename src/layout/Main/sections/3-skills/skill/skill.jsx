import React from 'react'
import classes from './skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tilt from "react-tilt";

export const Skill = (props) => {
    return (
        <section className={classes.skill}>
            <Tilt className="Tilt" options={{
                reverse: false,
                max: 2,
                scale: 1.05,
                speed: 200,
                transition: true,
                axis: null,
                reset: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
            }}>
                <section className={classes.skill__content}>
                    <div className={classes.image}>
                        <FontAwesomeIcon icon={props.icons} className={classes.icon} />
                    </div>
                    <h3 className={classes.skill__title}>{props.title}</h3>
                    <p className={classes.skill__description}>{props.discription}</p>
                </section>
            </Tilt>

        </section>
    )
}