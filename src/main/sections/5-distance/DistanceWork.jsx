import React from 'react'
import {Button} from "../../../components/button/Button";
import classes from "./DistanceWork.module.scss";
import Fade from "react-reveal/Fade";


export const DistanceWork = (props) => {

    return (
        <div className={classes.distanceWork__block}>
            <Fade left>
                <section   className={classes.container}>
                    <h2 className={classes.distanceWork__block__title}>Considering options for a distance job</h2>
                    <Button title={'Hire me!'}/>
                </section>
            </Fade>


        </div>


    )
}