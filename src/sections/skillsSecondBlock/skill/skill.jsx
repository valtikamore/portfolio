import React from 'react'
import classes from './skill.module.css'


export const Skill = (props) => {
    return (
        <section className={classes.skill}>
           <img src={props.image} alt="#" className={classes.skill__image}/>
            <h3>{props.title}</h3>
            <p>{props.skillText}</p>
        </section>
    )
}