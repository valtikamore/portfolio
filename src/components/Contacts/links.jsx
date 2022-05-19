import React from 'react'
import {Contact} from "./contact";
import classes from './contacts.module.scss'
import { config } from "./config";

export const Links = () => {
    return (
      <ul className={classes.contacts}>
          {config.contacts.map((el,index) =><Contact key={el+index} img={el.image} imgAlt={el.imgAlt} link={el.link}/> )}
      </ul>
    )
}
