import {Project} from "./project/Project";
import classes from './Projects.module.scss'
import {Title} from "../../../../components/SectionTitle/Title";
import React from "react";
import Fade from "react-reveal/Fade";

export const Projects = () => {
    return (
        <article className={`${classes.projectsBlock}`} id={'projects'}>
            <Fade right>
                <div className={` ${classes.container}`}>
                    <Title>
                        My projects
                    </Title>
                    <article className={classes.projects} >
                        <Project title={'Social network'}
                                 href={'https://github.com/valtikamore/social-network'}
                                 description={'A social networking service. An online platform for people to build social networks or social relationships with other people. '}
                                 technologies={'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules'}
                        />

                        <Project title={'ToDoList'}
                                 href={'https://github.com/valtikamore/TodoList'}
                                 description={'An app for Task Management, Project Management, Productivity. '}
                                 technologies={'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests'}
                        />
                        <Project title={'Pizza'}
                                 href={'https://github.com/valtikamore/pizza-market'}
                                 description={'A Pixel Perfect Landing Page. '}
                                 technologies={'HTML5, CSS3, JavaScript'}
                        />
                        <Project title={'cards'}
                                 href={'https://github.com/valtikamore/pizza-market'}
                                 description={'A Pixel Perfect Landing Page. '}
                                 technologies={'HTML5, CSS3, JavaScript'}
                        />
                    </article>
                </div>
            </Fade>


        </article>
    )
}
