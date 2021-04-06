import classes from './Skills.module.css'
import container from '../../styles/Container.module.css'
import {Skill} from "./skill/skill";

export const Projects = (props) => {
    let projectElement = props.projects
        .map(skill => <Skill image={skill.image} title={skill.title} discription={skill.discription}/>)
    return (
        <article
            className={`${classes.skillsBlock}`}>
            <div className={`${container.container} ${classes.container}`}>
                <h2 className={classes.skills__title}>My projects</h2>
                <article className={classes.projects} >
                    {skillElement}
                </article>

            </div>

        </article>
    )
}