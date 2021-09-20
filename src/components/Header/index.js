import React from 'react';
import './style.css';
import imgHeader from '../../assets/background-header.jpg';
import profile from '../../assets/profile.jpg';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';

function Header() {
    const whatsapp = `https://api.whatsapp.com/send?l=pt_BR&phone='55012997049359'&text=Olá! Me interessei pelo seu portfólio, podemos conversar?`;
    const linkedin = 'https://www.linkedin.com/in/agnaldo-pereira-de-souza-silva-filho-8823081a6/';
    const github = 'https://github.com/agnaldo26/'
    return (
        <header className='header'>
            <img src={imgHeader} className='img-header' alt='códigos'/>
            <div className='profile'>
                <img src={profile} className='imgProfile' alt='perfil'/>
            </div>
            <address>
                <h2>Agnaldo Filho</h2>
                <h4>Dev Front-End / Go Beyonder</h4>
                <div className='contact'>
                    <a className='whatsapp' href={whatsapp} target='_blank' rel="noreferrer">
                        <img src={whatsappIcon} className='iconWhatsapp' alt='logo-whatsapp'/>
                        <span>Whatsapp</span>
                    </a>
                    <a className='linkedin' href={linkedin} target='_blank' rel="noreferrer">
                        <img src={linkedinIcon} alt='logo-linkedin'/>
                        <span>LinkedIn</span>
                    </a>
                    <a className='github' href={github}>
                        <img src={githubIcon} alt='logo-github' rel="noreferrer"/>
                        <span>GitHub</span>
                    </a>
                </div>
            </address>
        </header>
    )
}

export default Header;