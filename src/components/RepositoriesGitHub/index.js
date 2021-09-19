import React, { useEffect, useState } from 'react';
import './style.css';

function RepositoriesGitHub() {
    const user = 'agnaldo26';
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/repos`, {
            method: 'GET'
        }).then(response => {
            response.json().then((data) => {
                const repositories = data;
                const infoRepositories = [];

                repositories.map((repository) => {
                    return infoRepositories.push({
                        id: repository.id,
                        name: repository.name,
                        url: repository.url,
                    });
                })
                
                setRepositories(infoRepositories)
            })

        })
    }, []);
    return (
        <div className='repositories-container'>
            {repositories.map((repository) => {
                    return (
                        <div key={repository.id} className='item-container'>
                            <a href={repository.url} target='_blank'>{repository.name}</a>
                        </div>
                    )
            })}
        </div>
    )
}

export default RepositoriesGitHub;