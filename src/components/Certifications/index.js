import React from 'react';
import './style.css';

function Certifications(){

    return (
        <div className='certifications-container'>
            <a href='https://drive.google.com/file/d/16ZFzZ2cd_X_5-wwCrKrakyK-0s6orEFj/view?usp=drivesdk' target='_black' key='0' className='vtex item-certification-container' >
                VTEX IO
            </a>

            <a href='https://drive.google.com/file/d/162j-uR3oEQwFect3H3qbAmYM5onaGxkd/view?usp=drivesdk' target='_blank' key='1' className='full-stack item-certification-container'> Full-Stack Developer</a>

            <a href='https://drive.google.com/file/d/1NSfU_JprgK36iGRn-pW4lkCiA__8e7qI/view?usp=drivesdk' target='_blank' key='2' className='html item-certification-container'> HTML Web Developer</a>

            <a href='https://drive.google.com/file/d/164Y-EQ35T-aSMxKwf0_ENtExEBVYO52b/view?usp=drivesdk' target='_black' key='3' className='javascript item-certification-container'>JavaScript Game Developer</a>

        </div>
    )
}

export default Certifications;