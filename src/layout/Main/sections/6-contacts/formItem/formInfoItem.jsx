import React from 'react'
import classes from './formInfoItem.module.scss'
import {Image} from "../../../../../components/Image/Image";


export const FormInfoItem = (props) => {
    return (
        <div className={classes.formItem}>
            <div className={classes.iconWrapper}>
                <Image type={props.image} />
            </div>

            <div>{props.description}</div>
        </div>
    )
}