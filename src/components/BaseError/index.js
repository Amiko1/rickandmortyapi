import './style.scss'
export default function BaseError({ msg }) {
    return (
        <div className="error">
            {msg}
        </div>
    )
}
