import React from 'react'

import container from '../../styles/Container.module.scss'
import {Button} from "../../components/button/Button";
import classes from "./DistanceWork.module.scss";


export const DistanceWork = (props) => {

    return (
        <div className={classes.container}>
            <article className={`${container.container}`}>
                <section className={classes.distanceWork__block} >
                    <h2 className={classes.distanceWork__block__title}>Considering options for a distance job</h2>
                    <Button title={'Hire me!'}/>
                </section>
            </article>
        </div>


    )
}