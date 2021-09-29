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
                        url: repository.html_url,
                    });
                })
                setRepositories(infoRepositories)
            })

        })
    }, [props]);
    return (
        <section className='repositories-container'>
            {repositories.map((repository) => {
                return (
                    <a href={repository.url} key={repository.id} target='_blank' rel="noreferrer" className='item-repository'><span>{repository.name}</span></a>
                )
            })}
        </section>
    )
}

export default RepositoriesGitHub;