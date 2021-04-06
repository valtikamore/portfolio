import React from 'react'
import {AboutMe} from "../sections/aboutMeFirstBlock/aboutMe";
import {Skills} from "../sections/skillsSecondBlock/Skills";
import {Projects} from "../sections/projectsThirdBlock/Profects";
import {DistanceWork} from "../sections/distanceWorkFourthBlock/DistanceWork";
import {Contacts} from "../sections/ContactsFifthBlock/Contacts";

export const Main = (props) => {
    return (
        <main>
            <AboutMe/>
            <Skills skills={props.state.skills}/>
            <Projects projects={props.state.projects} />
            <DistanceWork/>
            <Contacts/>
        </main>
    )
}