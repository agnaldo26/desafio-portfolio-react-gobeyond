import React, { useEffect, useState } from 'react';
import './style.css';
import RepositoriesGitHub from '../RepositoriesGitHub';
import Certifications from '../Certifications'

function Main() {
    const [tab1Active, set1Active] = useState(true);
    const [tab2Active, set2Active] = useState(false);
    const [tab3Active, set3Active] = useState(false);

    const Tab1 = ({ title }) => {
        return (
            <button className='projects' onClick={() => {
                set1Active(true)
                set2Active(false);
                set3Active(false);
            }} className={tab1Active ? 'active' : ''}>{title}</button>
        )
    }

    const Tab2 = ({ title }) => {
        return (
            <button className='projects' onClick={() => {
                set1Active(false)
                set2Active(true);
                set3Active(false);
            }} className={tab2Active ? 'active' : ''}>{title}</button>
        )
    }

    const Tab3 = ({ title }) => {
        return (
            <button className='projects' onClick={() => {
                if (set3Active) {
                    set1Active(false);
                    set2Active(false);
                    set3Active(true);
                } else {
                    set3Active(true)
                }
            }} className={tab3Active ? 'active' : ''}>{title}</button>
        )
    }

    function Container(){
        if (tab1Active) {
            return (
                <RepositoriesGitHub
                    user='agnaldo26'
                />
            )
        } else if (tab2Active) {
            return (
                <Certifications />
            )
        }
    }

    return (
        <main>
            <nav className='tabs'>
                <Tab1 title='Projetos GitHub' />
                <Tab2 title='Certifications' />
                <Tab3 title='Hard skills' />
            </nav>
            <div className='container'>

                <Container />
            </div>
        </main>
    )
}

export default Main;