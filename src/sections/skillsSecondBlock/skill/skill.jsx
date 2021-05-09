import React from 'react'
import classes from './skill.module.scss'


export const Skill = (props) => {
    return (
        <section className={classes.skill}>
            <div className={classes.skill__iconBox}>
                <img src={props.image} alt={props.imgAlt} className={classes.skill__icon}/>
            </div>
            <h3 className={classes.skill__title}>{props.title}</h3>
            <p className={classes.skill__description}>{props.discription}</p>
        </section>
    )
}