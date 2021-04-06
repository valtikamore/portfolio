import React from 'react'
import classes from './skill.module.css'


export const Project = (props) => {
    return (
        <section className={classes.project}>
            <section>
                <img src={props.image} alt={props.imageAlt}/>
                <button>Look</button>
            </section>
            <section>
                <h4>{props.projectName}</h4>
                <p>{props.shortDescription}</p>
            </section>
        </section>
    )
}