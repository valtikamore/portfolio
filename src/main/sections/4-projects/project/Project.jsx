import React from 'react'
import classes from './project.module.scss'




export const Project = (props) => {
    return (
        <section className={classes.project}>
            <div className={classes.project__content}>
                <section className={classes.project__head}>
                    <div className={classes.project__body__image} style={props.style}>
                        <a href={props.href} target={'_blank'}>Look</a>
                    </div>
                </section>
                <article className={classes.project__body}>
                    <h3 className={classes.project__title}>{props.title}</h3>
                    <p className={classes.project__description}>{props.technologies}</p>
                    <p className={classes.project__description}>{props.description}</p>
                </article>
            </div>
        </section>
    )
}