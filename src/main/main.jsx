import React from 'react'
import {AboutMe} from "../sections/aboutMeFirstBlock/aboutMe";
import {Skills} from "../sections/skillsSecondBlock/Skills";

export const Main = (props) => {
    return (
        <main>
            <AboutMe/>
            <Skills skills={props.skills}/>
        </main>
    )
}