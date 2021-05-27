import {Project} from "./project/Project";
import classes from './Projects.module.scss'
import {Title} from "../../../components/SectionTitle/Title";
import React from "react";
import social from '../../../assets/projects/5-social-engineering-attacks.png'
import todo from '../../../assets/projects/c5781d72c1298dc869b74702b4ee42a0.png'





export const Projects = (props) => {
    const socialNetworkImg = {
        backgroundImage: `url(${social})`
    }
    const todoListImg = {
        backgroundImage: `url(${todo})`
    }
    const pizza = {
        backgroundImage: `url(${todo})`
    }


    return (
        <article className={`${classes.projectsBlock}`} id={'projects'}>
            <div className={` ${classes.container}`}>
                    <Title>
                        My projects
                    </Title>
                <article className={classes.projects} >
                  <Project title={'Social network'}
                           href={'https://github.com/valtikamore/social-network'}
                           description={'A social networking service. An online platform for people to build social networks or social relationships with other people. '}
                           technologies={'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules'}
                           style={socialNetworkImg} />

                    <Project title={'ToDoList'}
                             href={'https://github.com/valtikamore/TodoList'}
                             description={'An app for Task Management, Project Management, Productivity. '}
                             technologies={'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests'}
                             style={todoListImg}
                    />
                    <Project title={'Singolo'}
                             href={'https://github.com/valtikamore/pizza-market'}
                             description={'A Pixel Perfect Landing Page. '}
                             technologies={'HTML5, CSS3, JavaScript'}
                             style={pizza}
                    />
                    <Project title={'Singolo'}
                             href={'https://github.com/valtikamore/pizza-market'}
                             description={'A Pixel Perfect Landing Page. '}
                             technologies={'HTML5, CSS3, JavaScript'}
                             style={pizza}
                    />
                </article>
            </div>

        </article>
    )
}