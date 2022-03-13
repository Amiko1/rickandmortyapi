import './style.scss'

import { useState } from "react";
import { Link } from "react-router-dom";

const AutoComplete = ({ data }) => {

    let [suggestion, setSuggestions] = useState([]);


    function onChangeHandler(text) {
        let matches = []
        if (text.length > 0) {
            matches = data.filter(char => {
                const regex = new RegExp(`${text}`, "gi");
                return char.name.match(regex)
            })
        }
        if (matches.length === 0 && text.length > 1) matches.push({ name: 'no suggestion' })
        setSuggestions(matches)
    }


    return (
        <>
            <div className='autocomplete'>
                <input onChange={(e) => onChangeHandler(e.target.value)} placeholder='Find Character' className="autocomplete__input" />
                {
                    suggestion.length > 0 && <div className='suggestion-container'>
                        {
                            suggestion.map((list) => (

                                <Link key={list.id} className='autocomplete__suggestions' to={`/profile/${list.id}`} >
                                    {list.name}
                                </Link>
                            ))
                        }
                    </div>
                }
            </div>
        </>
    );
};
export default AutoComplete;