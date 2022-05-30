import React from 'react'
import classes from './project.module.scss'
import Tilt from "react-tilt";

export const Project = (props) => {
    console.log(props?.img)
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
                        <img src={props?.img} className={classes.project__body__image} alt={props.alt}/>
                    </section>
                    <article className={classes.project__body}>
                        <h3 className={classes.project__title}>{props.title}</h3>
                        <p className={classes.project__description}>{props.description}</p>
                        <p className={classes.project__description}>{props.technologies}</p>
                    </article>
                </div>
            </Tilt>

        </section>
    )
}
