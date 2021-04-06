import deskLamp from '../assets/002-desk lamp.svg'
import stepler from '../assets/005-stapler.svg'
import mouth from '../assets/037-mouse.svg'
import hummer from '../assets/038-hammer.svg'
import keyboard from '../assets/031-keyboard.svg'
import cd from '../assets/042-cd.svg'
import plotter from '../assets/042-cd.svg'
import pancelCase from '../assets/010-pencil case.svg'
import briefCase from '../assets/012-plotter.svg'
import machine from '../assets/006-sewing machine.svg'


const discription = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. spsum dolor sit amet, consepsum dolor sit amet, consepsum dolor sit amet, conse'
export const state = {
    skills : [
        {image: deskLamp, title: 'TypeScript', discription, imgAlt: 'lamp'},
        {image: stepler, title: 'TDD', discription, imgAlt: 'stepler'},
        {image: mouth, title: 'React', discription, imgAlt: 'mouth'},
        {image: hummer, title: 'Redux', discription, imgAlt: 'hummer'},
        {image: keyboard, title: 'UI/UX', discription, imgAlt: 'keyboard'},
        {image: cd, title: 'Vue', discription, imgAlt: 'cd disk'},
        {image: briefCase, title: 'Storybook', discription, imgAlt: 'brief case'},
        {image: plotter, title: 'HTML 5 ', discription, imgAlt: 'plotter'},
        {image: machine, title: 'CSS3', discription, imgAlt: 'sewing machine'},
        {image: pancelCase, title: 'JavaScript ES6+', discription, imgAlt: 'pancel case'},
    ],
    projects : [
        {image: 'http://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png',imageAlt:'social people', projectName: 'Social-network', shortDescription:discription },
        {image: 'https://www.nscstrategies.com/wp-content/uploads/2016/06/Task-Force-Creation.jpg',imageAlt:'todolist' ,projectName: 'todoList', shortDescription: discription},
        {image: 'https://s00.yaplakal.com/pics/pics_original/1/8/6/14301681.jpg',imageAlt:'pizza', projectName: 'react-pizza', shortDescription: discription},

    ]
}

