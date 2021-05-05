import React from 'react'
import classes from './Skills.module.css'
import container from '../../styles/Container.module.css'
import {Skill} from "./skill/skill";
import {Title} from "../../components/SectionTitle/Title";

export const Skills = (props) => {
    let skillElement = props.skills
        .map((skill,index) => <Skill key={`${index} ${skill.imgAlt}`} image={skill.image} title={skill.title} discription={skill.description} imgAlt={skill.imgAlt}/>)
    return (


        <article className={`${classes.skillsBlock}`}>
           <section className={`${container.container} ${classes.container}`}>
                  <Title>My skills</Title>
              <article className={classes.skills} >
                  {skillElement}
              </article>

           </section>
        </article>
    )
}