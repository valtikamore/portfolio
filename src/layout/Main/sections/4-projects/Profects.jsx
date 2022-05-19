import {Project} from "./project/Project";
import classes from './Projects.module.scss'
import {Title} from "../../../../components/SectionTitle/Title";
import React from "react";
import Fade from "react-reveal/Fade";
import {projectsConfig} from "./config";

export const Projects = () => {
    return (
        <article className={`${classes.projectsBlock}`} id={'projects'}>
            <Fade right>
                <div className={` ${classes.container}`}>
                    <Title>
                        My projects
                    </Title>
                    <article className={classes.projects} >
                        {projectsConfig.map(i => (
                            <Project
                                title={i.title}
                                href={i.path}
                                description={i.description}
                                technologies={i.technologies}
                            />
                        ))}
                    </article>
                </div>
            </Fade>


        </article>
    )
}
