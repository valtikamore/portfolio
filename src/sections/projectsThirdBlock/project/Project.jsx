import React from 'react'
import classes from './project.module.css'
import {Button} from "../../../components/button/Button";


export const Project = (props) => {
    return (
        <section className={classes.project}>
            <div className={classes.project__content}>
                <section className={classes.project__head}>
                        <img
                            className={classes.project__body__image}
                            src={props.image} alt={props.imageAlt}/>
                        <div className={classes.project__body__btn}>
                            <Button title='Look'> </Button>
                        </div>
                </section>
                <article className={classes.project__body}>
                    <h3 className={classes.project__title}>{props.name}</h3>
                    <p className={classes.project__description}>{props.shortDescription}</p>
                </article>
            </div>

        </section>
    )
}