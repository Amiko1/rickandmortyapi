import './style.scss'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import BaseSpinner from '../../components/BaseSpinner'

let Profile = () => {
    const { id } = useParams();
    let [character, setCharacter] = useState({});
    let [status, setStatus] = useState('loading');

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/character/${id}`)

    }, []);

    async function fetchData(url) {
        setStatus('loading')
        let response = await fetch(url);
        let user = await response.json();
        setCharacter(user)
        setStatus('loaded')
        console.log(character.name, user)
    }




    return (
        <>
            {status === "loading" ? <BaseSpinner /> :
                <main className='profile'>
                    <figcaption >
                        <img className='profile__img' src={character.image} alt="profile img" />
                    </figcaption>
                    <div>
                        <h2>NAME: {character.name}</h2>
                        <p>SPECIES : {character.species}</p>
                        <p>GENDER : {character.gender}</p>
                        <p>LOCATION : {character.location?.name}</p>

                        <p>STATUS: {character.status}</p>
                        <p>CREATED: {character.created}</p>
                    </div>
                </main>
            }
        </>


    );
}


export default Profile
