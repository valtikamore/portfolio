import React from 'react'
import classes from "./Title.module.scss";

export const Title = (props) => {
    return (
        <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{props.children}</h2>
        </div>
    )
}