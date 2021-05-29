import React from 'react'
import classes from './Skills.module.scss'
import {Skill} from "./skill/skill";
import {Title} from "../../../components/SectionTitle/Title";

export const Skills = (props) => {

    return (
        <article className={`${classes.skillsBlock}`}>
           <section className={` ${classes.container}`}>
                  <Title>My skills</Title>
              <div className={classes.skills} >
                  {props.skills.map((skill, index) => <Skill
                      key={`${index} ${skill.imgAlt}`}
                      image={skill.image}
                      title={skill.title}
                      icons={skill.icon}
                      discription={skill.description}
                      imgAlt={skill.imgAlt}/>)}
              </div>

           </section>
        </article>
    )
}