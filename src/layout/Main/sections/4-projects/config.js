import {psychic, booking, fasol, partTime} from "../../../../components/Image/imageProject";

export const projectsConfig = [
    {
        title:'Under NDA (Project about psychics and mediums)',
        image: psychic,
        alt:'psychic',
        description: 'Main aim of this project is to find psychic or medium and talk on the phone or chat.\n' +
            'Psychics are separated into different categories by their status,price and rating. Each\n' +
            'the psychic has his own personal card with additional information.\n',
        technologies: 'Next js, React, Redux, Redux-saga, Jest, SASS, Contentful CMS, Material-UI , AWS , Sentry , react-hook-forms'
    },
    {
        title:'Under NDA (Like Booking.com project)',
        image: booking,
        alt:'booking',
        description: 'The main mission of this app is to help experience makers (local travel guides and\n' +
            'local travel business owners) spread information about travel places. Any\n' +
            'an independent traveler can look at this, and give his own rate and opinion. They can\n' +
            'use a digital calendar to find a specific place based on date , comments and rating.\n' +
            'Also it is possible to plan a trip based on the traveler\'s schedule and convenient time\n' +
            'to travel.\n',
        technologies: 'Typescript, React, Redux, Redux-saga, Jest ,Sentry, SASS, Redux Persist, Next js , Storybook, Antd'
    },
    {
        title:'Fasol',
        image: fasol,
        alt:'fasol',
        description: 'Fasol is a musical talent training ground. \n' +
            'The app offers two roles - teacher and coach. The coach can create his own schedule by adding training sessions with students. At the moment the training starts, the student or coach can call each other . During the lesson, video communication is available, the selection and addition of songs to the playlist, media piano as well as a chat.\n',
        technologies: 'Antd, peerjs, React, Redux , Redux-thunk, LESS, Socket.io, REST'
    },
    {
        title:'Part-time projects',
        image: partTime,
        alt:'partTime',
        description: 'Plugin for Microsoft word (desktop & online) | Under NDA (Project for management Netflix subscriptions | Under NDA (cosmetics stores))',
        technologies: 'Typescript, React, Redux, Redux-saga | Redux-thunk, Jest ,Sentry, SASS | Tailwind, Redux Persist, Next js, Storybook, Antd | Material-UI'
    },
]
