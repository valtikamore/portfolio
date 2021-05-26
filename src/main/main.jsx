import React from 'react'
import {Home} from "../sections/1HomeFirstBlock/home";
import {Skills} from "../sections/skillsSecondBlock/Skills";
import {Projects} from "../sections/projectsThirdBlock/Profects";
import {DistanceWork} from "../sections/5distanceWorkFourthBlock/DistanceWork";
import {Contacts} from "../sections/5ContactsFifthBlock/Contacts";
import {AboutMe} from "../sections/2aboutMe/aboutMe";

export const Main = (props) => {
    return (
        <main>
            <Home contacts={props.state.contacts}/>
            <AboutMe/>
            <Skills skills={props.state.skills}/>
            <Projects  />
            <DistanceWork/>
            <Contacts/>
        </main>
    )
}