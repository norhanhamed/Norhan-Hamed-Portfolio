import user_image from './user-image.webp';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.webp';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send from './send.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import responsive_icon from './responsive_icon.png'
import hosting_icon from './hosting_icon.png'
import react_icon from'./react_icon.png'
import next_icon from './next_icon.png'
import work1 from "./work-1.png"
import work2 from "./work-2.png"
import work3 from "./work-3.png"
import work4 from "./work-4.png"
import work5 from "./work-5.png"
import work6 from "./work-6.png"
import work7 from "./work-7.png"
import work8 from "./work-8.png"
import work9 from "./work-9.png"


export const assets = {
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    responsive_icon,
    hosting_icon,
    react_icon,
    next_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    graphics_icon,
    right_arrow,
    send,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'FreshCart project',
        description: 'React app',
        bgImage: assets.work1,
        git_link: 'https://github.com/norhanhamed/FreshCart',
        demo_link: ' https://norhanhamed.github.io/FreshCart/',
    },
    {
        title: 'Movies project',
        description: 'React app',
        bgImage:  assets.work2,
        git_link: "https://github.com/norhanhamed/Movies",
        demo_link : "https://norhanhamed.github.io/Movies/",
    },
    {
        title: 'Real-Estate project',
        description: 'Recat app',
        bgImage: assets.work6,
        git_link: 'https://github.com/norhanhamed/real-estate',
        demo_link: 'https://norhanhamed.github.io/real-estate/',
    },
    {
        title: 'Weather project ',
        description: 'React app',
        bgImage: assets.work5,
        git_link: "https://github.com/norhanhamed/Weather-App",
        demo_link : " https://norhanhamed.github.io/Weather-App/"
    },
    {
        title: 'platform project ',
        description: 'Html css app',
        bgImage: assets.work8,
        git_link: "https://github.com/norhanhamed/Elzero-platform",
        demo_link : "https://norhanhamed.github.io/Elzero-platform/"
    },
    {
        title: 'Furniture project ',
        description: 'Html css app',
        bgImage: assets.work9,
        git_link: "https://github.com/norhanhamed/furniture",
        demo_link : "https://norhanhamed.github.io/furniture/"
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.responsive_icon, title: 'Responsive code', description: 'creating responsive coding for mobile , ipad devices...', link: '' },
    { icon: assets.hosting_icon, title: 'Hosting', description: ' hosting your site in cloud ..', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript , Bootstrap , React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science from Mansoura Unviersity' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, , assets.react_icon , assets.next_icon , assets.git , 
];