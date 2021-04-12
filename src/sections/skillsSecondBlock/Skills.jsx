import React from 'react'
import classes from './Skills.module.css'
import container from '../../styles/Container.module.css'
import {Skill} from "./skill/skill";

export const Skills = (props) => {
    let skillElement = props.skills
        .map((skill,index) => <Skill key={`${index} ${skill.imgAlt}`} image={skill.image} title={skill.title} discription={skill.description} imgAlt={skill.imgAlt}/>)
    return (


        <article
            className={`${classes.skillsBlock}`}>
           <div className={`${container.container} ${classes.container}`}>
               <h2 className={classes.skills__title}>My skills</h2>
              <article className={classes.skills} >
                  {skillElement}
              </article>

           </div>

        </article>
    )
}