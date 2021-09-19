import React from 'react';
import './header.css';
import imgHeader from '../../assets/background-header.jpg';
import profile from '../../assets/profile.jpg';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import emailIcon from '../../assets/email-icon.svg';
function Header() {
    return (
        <header className='header'>
            <img src={imgHeader} className='img-header' />
            <div className='profile'>
                <img src={profile} className='imgProfile' />
            </div>
            <address>
                <h2>Agnaldo Filho</h2>
                <h3>Go Beyonder</h3>
                <div className='contact'>
                    <div className='whatsapp'>
                        <img src={whatsappIcon} className='iconWhatsapp' />
                        <span>Whatsapp</span>
                    </div>
                    <div className='phone'>
                        <img src={phoneIcon}/>
                        <span>Phone</span>
                    </div>
                    <div className='email'>
                        <img src={emailIcon}/>
                        <span>E-mail</span>
                    </div>
                </div>
            </address>
        </header>
    )
}

export default Header