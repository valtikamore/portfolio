import React from 'react'
import {Contact} from "./contact";
import classes from './contacts.module.scss'



export const Links = (props) => {
    return (
      <ul className={classes.contacts}>
          {props.contacts.map((el,index) =><Contact key={el+index} img={el.image} imgAlt={el.imgAlt} link={el.link}/> )}
      </ul>
    )
}