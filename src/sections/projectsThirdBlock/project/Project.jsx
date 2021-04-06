import React from 'react'
import classes from './project.module.css'
import {Button} from "../../../components/button/Button";


export const Project = (props) => {


    return (
        <section className={classes.project}>
            <section className={classes.project__head}>
                <img
                    className={classes.project__body__image}
                    src={props.image} alt={props.imageAlt}/>
                <Button class={classes.btn} title='Look'> </Button>
            </section>
            <section className={classes.project__body}>
                <h4 className={classes.project__title}>{props.name}</h4>
                <p className={classes.project__description}>{props.shortDescription}</p>
            </section>
        </section>
    )
}