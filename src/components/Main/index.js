import React from 'react';
import './style.css';
import RepositoriesGitHub from '../RepositoriesGitHub';

function Main() {
    return (
        <main>
            <nav className='tabs'>
                <button>Projetos GitHub</button>
                <button>Teste</button>
                <button>Teste</button>
            </nav>
            <div className='container'>
                <RepositoriesGitHub/>
            </div>
        </main>
    )
}

export default Main;