import './style.scss'

const BaseButton = ({ onPress }) => {
    return (
        <button onClick={onPress} className='button'>
            FILTER
        </button>
    )
}

export default BaseButton