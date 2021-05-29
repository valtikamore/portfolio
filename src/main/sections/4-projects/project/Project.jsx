import React from 'react'
import classes from './project.module.scss'
import Tilt from "react-tilt";




export const Project = (props) => {
    return (
        <section className={classes.project}>
            <Tilt className="Tilt" options={{
                reverse: false,
                max: 2,
                scale: 1,
                speed: 400,
                transition: true,
                axis: null,
                reset: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
            }}>
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
            </Tilt>

        </section>
    )
}