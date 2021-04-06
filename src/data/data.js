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


const description = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. spsum dolor sit amet, consepsum dolor sit amet, consepsum dolor sit amet, conse'
export const state = {
    skills: [
        {image: deskLamp, title: 'TypeScript', description, imgAlt: 'lamp'},
        {image: stepler, title: 'TDD', description, imgAlt: 'stepler'},
        {image: mouth, title: 'React', description, imgAlt: 'mouth'},
        {image: hummer, title: 'Redux', description, imgAlt: 'hummer'},
        {image: keyboard, title: 'UI/UX', description, imgAlt: 'keyboard'},
        {image: cd, title: 'Vue', description, imgAlt: 'cd disk'},
        {image: briefCase, title: 'Storybook', description, imgAlt: 'brief case'},
        {image: plotter, title: 'HTML 5 ', description, imgAlt: 'plotter'},
        {image: machine, title: 'CSS3', description, imgAlt: 'sewing machine'},
        {image: pancelCase, title: 'JavaScript ES6+', description, imgAlt: 'pancel case'},
    ],
    projects: [
        {
            image: 'http://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png',
            imageAlt: 'social people',
            projectName: 'Social-network',
            shortDescription: description
        },
        {
            image: 'https://www.nscstrategies.com/wp-content/uploads/2016/06/Task-Force-Creation.jpg',
            imageAlt: 'todolist',
            projectName: 'TodoList',
            shortDescription: description
        },
        {
            image: 'https://s00.yaplakal.com/pics/pics_original/1/8/6/14301681.jpg',
            imageAlt: 'pizza',
            projectName: 'React-pizza',
            shortDescription: description
        },

    ]
}

