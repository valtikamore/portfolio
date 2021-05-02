import React from 'react'
import classes from "./Title.module.css";

export const Title = (props) => {
    return (
        <div>
            <h2 className={classes.title}>{props.children}</h2>
        </div>
    )
}