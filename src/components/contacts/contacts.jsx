import React from 'react'
import {Contact} from "./contact";
import classes from './contacts.module.scss'
export const Contacts = () => {
    return (
      <ul className={classes.contacts}>
          <Contact>vk</Contact>
          <Contact>insta</Contact>
          <Contact>linked</Contact>
          <Contact>Git</Contact>
          <Contact>hh</Contact>
      </ul>
    )
}