import "./style.scss";

function BaseSpinner() {
    return (
        <div>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div >
    );
}

export default BaseSpinner