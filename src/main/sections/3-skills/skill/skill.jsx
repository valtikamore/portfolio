import React from 'react'
import classes from './skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Skill = (props) => {
    return (
        <section className={classes.skill}>
            <section className={classes.skill__content}>
                <div className={classes.image}>
                    <FontAwesomeIcon icon={props.icons} className={classes.icon} />
                </div>
                <h3 className={classes.skill__title}>{props.title}</h3>
                <p className={classes.skill__description}>{props.discription}</p>
            </section>
        </section>
    )
}