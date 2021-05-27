import React from 'react'
import classes from './Skills.module.scss'
import {Skill} from "./skill/skill";
import {Title} from "../../../components/SectionTitle/Title";

export const Skills = (props) => {

    return (
        <article className={`${classes.skillsBlock}`} id={'skills'}>
           <section className={` ${classes.container}`}>
                  <Title>My skills</Title>
              <article className={classes.skills} >
                  {props.skills.map((skill, index) => <Skill
                      key={`${index} ${skill.imgAlt}`}
                      image={skill.image}
                      title={skill.title}
                      discription={skill.description}
                      imgAlt={skill.imgAlt}/>)}
              </article>

           </section>
        </article>
    )
}