
import container from '../../styles/Container.module.css'
import {Project} from "./project/Project";
import classes from './Projects.module.css'
import {Title} from "../../components/SectionTitle/Title";
import React from "react";


export const Projects = (props) => {
    let projectElement = props.projects
        .map((project,index) => <Project
            key={`${index} ${project.imageAlt}`}
            image={project.image}
            imageAlt={project.imageAlt}
            shortDescription={project.shortDescription}
            name={project.projectName}
        />)



    return (
        <article className={`${classes.projectsBlock}`}>
            <div className={`${container.container} ${classes.container}`}>
                    <Title>
                        My projects
                    </Title>
                <article className={classes.projects} >
                    {projectElement}
                </article>
            </div>

        </article>
    )
}