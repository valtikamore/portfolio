import deskLamp from '../assets/icons/skills/002-desk lamp.svg'
import stepler from '../assets/icons/skills/005-stapler.svg'
import mouth from '../assets/icons/skills/037-mouse.svg'
import hummer from '../assets/icons/skills/038-hammer.svg'
import keyboard from '../assets/icons/skills/031-keyboard.svg'
import cd from '../assets/icons/skills/042-cd.svg'
import plotter from '../assets/icons/skills/042-cd.svg'
import pancelCase from '../assets/icons/skills/010-pencil case.svg'
import briefCase from '../assets/icons/skills/012-plotter.svg'
import machine from '../assets/icons/skills/006-sewing machine.svg'
import gitIcon from '../assets/icons/contacts/032-github.svg'
import InstIcon from '../assets/icons/contacts/044-instagram.svg'
import linkedIcon from '../assets/icons/contacts/052-linkedin.svg'
import telegaIcon from '../assets/icons/contacts/090-telegram.svg'
import codeIcon from '../assets/icons/contacts/codewars.svg'
import location from '../assets/icons/formInfoIcons/location.svg'
import mail from '../assets/icons/formInfoIcons/mail.svg'
import phone from '../assets/icons/formInfoIcons/phone.svg'


const description = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. spsum '
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
    contacts:  [
        {image: gitIcon, imgAlt: 'git',link:'https://github.com/valtikamore'},
        {image: InstIcon, imgAlt: 'inst',link:'https://www.instagram.com/valtikamore/'},
        {image: linkedIcon, imgAlt: 'in',link:'https://www.linkedin.com/in/valentin-kalchevski-841055207/'},
        {image: telegaIcon, imgAlt: 'telegram',link:'https://t.me/Valtikamore'},
        {image: codeIcon, imgAlt: 'codewars',link:'https://www.codewars.com/users/valtikamore'},
        ],
    formInfoItems : [
        {image: mail, imgAlt: 'mail',description:'valtikamore@gmail.com'},
        {image: location, imgAlt: 'location',description:'Minsk,Belarus'},
        {image: phone, imgAlt: 'phone',description:'+375(25)-732-18-33'},
    ]
}

