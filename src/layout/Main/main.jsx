import React from 'react'
import {Home} from "./sections/1-Home/home";
import {Skills} from "./sections/3-skills/Skills";
import {Projects} from "./sections/4-projects/Profects";
import {DistanceWork} from "./sections/5-distance/DistanceWork";
import {Contacts} from "./sections/6-contacts/Contacts";
import {AboutMe} from "./sections/2-about/aboutMe";

export const Main = () => {
    return (
        <main>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <DistanceWork/>
            <Contacts/>
        </main>
    )
}
