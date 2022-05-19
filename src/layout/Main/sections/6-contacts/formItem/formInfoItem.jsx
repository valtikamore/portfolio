import React from 'react'
import classes from './formInfoItem.module.scss'


export const FormInfoItem = (props) => {
    return (
        <div className={classes.formItem}>
            <div className={classes.iconWrapper}>
                <img src={props.image} alt={props.imgAlt}/>
            </div>

            <div>{props.description}</div>
        </div>
    )
}