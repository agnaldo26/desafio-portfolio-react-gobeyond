import React from 'react';
import './style.css';

function HardSkills() {
    return (
        <div className='hardskills-container'>
            <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' key='0' className='html item-hardskill' >
            <span>HTML</span>
            </a>

            <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' key='1' className='css item-hardskill'> <span>CSS</span></a>

            <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction' target='_blank' key='2' className='javascript item-hardskill'> <span>JavaScript</span></a>

            <a href='https://pt-br.reactjs.org/' target='_blank' key='3' className='react item-hardskill'><span>Reacy</span></a>

            <a href='https://nodejs.org/' target='_blank' key='4' className='node item-hardskill'><span>Node</span></a>
        </div>
    )
}

export default HardSkills;