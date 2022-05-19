import React from 'react'
import classes from './Skills.module.scss'
import {Skill} from "./skill/skill";
import {Title} from "../../../../components/SectionTitle/Title";
import Fade from "react-reveal/Fade";
import {skills} from "./config";

export const Skills = () => {

    return (
        <article className={`${classes.skillsBlock}`} id={'skills'}>
            <Fade left>
                <section className={` ${classes.container}`}>
                    <Title>My skills</Title>
                    <div className={classes.skills} >
                        {skills.map((skill, index) => <Skill
                            key={`${index} ${skill.imgAlt}`}
                            image={skill.image}
                            title={skill.title}
                            icons={skill.icon}
                            discription={skill.description}
                            imgAlt={skill.imgAlt}/>)}
                    </div>
                </section>
            </Fade>
        </article>
    )
}
