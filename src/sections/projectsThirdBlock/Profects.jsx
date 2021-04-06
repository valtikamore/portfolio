
import container from '../../styles/Container.module.css'
import {Project} from "./project/Project";
import classes from './Projects.module.css'


export const Projects = (props) => {
    let projectElement = props.projects
        .map(project => <Project image={project.image} imageAlt={project.imageAlt} shortDescription={project.shortDescription} name={project.projectName}/>)



    return (
        <article
            className={`${classes.projectsBlock}`}>
            <div className={`${container.container} ${classes.container}`}>
                <h2 className={classes.projects__title}>My projects</h2>
                <article className={classes.projects} >
                    {projectElement}
                </article>
            </div>

        </article>
    )
}