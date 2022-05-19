import gitIcon from '../assets/icons/contacts/032-github.svg'
import InstIcon from '../assets/icons/contacts/044-instagram.svg'
import linkedIcon from '../assets/icons/contacts/052-linkedin.svg'
import telegaIcon from '../assets/icons/contacts/090-telegram.svg'
import codeIcon from '../assets/icons/contacts/codewars.svg'
import location from '../assets/icons/formInfoIcons/location.svg'
import mail from '../assets/icons/formInfoIcons/mail.svg'
import phone from '../assets/icons/formInfoIcons/phone.svg'
import {faBriefcase, faTasks , faBook , faCalculator} from "@fortawesome/free-solid-svg-icons";

export const state = {
    skills: [
        { title: 'Foundations', description:'JavaScript, TypeScript, HTML5, CSS3', imgAlt: 'lamp' ,icon:faBook},
        { title: 'Development', description:'React, Redux, Redux-toolkit', imgAlt: 'stepler' ,icon:faBriefcase},
        { title: 'Testing', description:'Unit Tests, SnapShot, Storybook', imgAlt: 'mouth' ,icon:faTasks},
        { title: 'Design', description:'Material UI, Ant-Design etc', imgAlt: 'hummer' ,icon:faCalculator},
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

