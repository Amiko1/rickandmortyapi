import './style.scss'
import { useEffect, useState } from 'react'
import BaseError from '../BaseError';

let localCache = {};

const CharacterList = () => {

    let [charList, setCharList] = useState([]);
    let [error, setError] = useState(false);
    let [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        if (localCache[filterValue]) {
            setCharList(localCache[filterValue])
            setError(false)
        } else {
            fetchData(`https://rickandmortyapi.com/api/character/?name=${filterValue}`);
        }

    }, [filterValue]);

    async function fetchData(url) {
        let response = await fetch(url);
        let user = await response.json();

        if (!user.error) {
            setError(false)
            setCharList(user.results)
            localCache[filterValue] = user.results;
        } else {
            setError(true)
        }
    }

    return (
        <>
            <div className='filter'>
                <input onChange={event => setFilterValue(event.target.value)} placeholder='FILTER' className="filter__input" />
            </div>
            {error && <BaseError msg="Cant Find this Character" />}
            {!error && <div className='flex flex-wrap'>
                {
                    charList.map((list) => (
                        <article key={list.id} className="charlist">
                            <img src={list.image} alt="test" className='charlist__img' />
                            <div>
                                <h2 className='charlist__name'>{list.name}</h2>
                                <p className='charlist__status'>{list.status}</p>
                            </div>
                        </article>
                    ))
                }
            </div >}
        </>
    );
}

export default CharacterList;
