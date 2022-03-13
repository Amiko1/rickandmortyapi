import './style.scss'
import AutoComplete from '../AutoComplete';
import { useEffect, useState } from 'react'

const CharacterList = () => {
    let [charList, setCharList] = useState([]);

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/character`);
    }, []);

    async function fetchData(url) {
        let response = await fetch(url);
        let user = await response.json();
        setCharList(user.results)
    }

    return (
        <>
            <AutoComplete data={charList} />
            <div className='flex flex-wrap'>
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
            </div >
        </>
    );
}
export default CharacterList;
