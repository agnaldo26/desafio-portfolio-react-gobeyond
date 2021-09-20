import React, {useState } from 'react';
import './style.css';
import RepositoriesGitHub from '../RepositoriesGitHub';
import Certifications from '../Certifications';
import HardSkills from '../HardSkills';
import octocat from '../../assets/octocat.svg';
import certification from '../../assets/certification.png';
import programing from '../../assets/programing.png';

function Main() {
    const [tab1Active, set1Active] = useState(true);
    const [tab2Active, set2Active] = useState(false);
    const [tab3Active, set3Active] = useState(false);

    const Tab1 = ({ title }) => {
        return (
            <button onClick={() => {
                set1Active(true)
                set2Active(false);
                set3Active(false);
            }} className={tab1Active ? 'active' : ''}><img src={octocat} alt='octocat'/>{title}</button>
        )
    }

    const Tab2 = ({ title }) => {
        return (
            <button onClick={() => {
                set1Active(false)
                set2Active(true);
                set3Active(false);
            }} className={tab2Active ? 'active' : ''}><img src={certification} alt='certification'/>{title}</button>
        )
    }

    const Tab3 = ({ title}) => {
        return (
            <button onClick={() => {
                if (set3Active) {
                    set1Active(false);
                    set2Active(false);
                    set3Active(true);
                } else {
                    set3Active(true)
                }
            }} className={tab3Active ? 'active' : ''}><img src={programing} alt='programing'/>{title}</button>
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
        } else if (tab3Active){
            return(
                <HardSkills />
            )
        }
    }

    return (
        <main>
            <nav className='tabs'>
                <Tab1 title='Projetos'/>
                <Tab2 title='Certificações'/>
                <Tab3 title='Hard skills'/>
            </nav>
            <div className='container'>
                <Container />
            </div>
        </main>
    )
}

export default Main;