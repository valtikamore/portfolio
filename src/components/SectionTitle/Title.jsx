import React from 'react'
import classes from "./Title.module.scss";

export const Title = (props) => {
    return <h2 className={classes.title}>{props.children}</h2>
}
