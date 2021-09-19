import React, { useEffect, useState } from 'react';
import './style.css';

function RepositoriesGitHub(props) {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.user}/repos`, {
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
                    <a href={repository.url} key={repository.id} target='_blank' className='item-repository-container'>{repository.name}</a>
                )
            })}
        </div>
    )
}

export default RepositoriesGitHub;