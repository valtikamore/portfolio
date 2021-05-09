import React from 'react'
import {Home} from "../sections/HomeFirstBlock/home";
import {Skills} from "../sections/skillsSecondBlock/Skills";
import {Projects} from "../sections/projectsThirdBlock/Profects";
import {DistanceWork} from "../sections/distanceWorkFourthBlock/DistanceWork";
import {Contacts} from "../sections/ContactsFifthBlock/Contacts";
import {AboutMe} from "../sections/aboutMe/aboutMe";

export const Main = (props) => {
    return (
        <main>
            <Home/>
            <AboutMe/>
            <Skills skills={props.state.skills}/>
            <Projects  />
            <DistanceWork/>
            <Contacts/>
        </main>
    )
}