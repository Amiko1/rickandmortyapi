import './style.scss'
import AutoComplete from "../../components/AutoComplete"
import RenderList from '../../components/RenderList'
import BaseSpinner from '../../components/BaseSpinner'

import { useEffect, useState } from 'react'

const CharacterList = () => {
    let [charList, setCharList] = useState([]);
    let [status, setStatus] = useState([]);

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/character`);
    }, []);

    async function fetchData(url) {
        setStatus('loading')
        let response = await fetch(url);
        let user = await response.json();
        setCharList(user.results)
        setStatus('loaded')
    }

    return (
        <>

            {status === 'loading' ? <BaseSpinner /> :
                <>
                    <AutoComplete data={charList} />
                    <RenderList data={charList} />
                </>
            }




        </>
    );
}
export default CharacterList;
