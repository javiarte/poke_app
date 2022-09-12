import React from 'react';
import '../styles/components/Details.css'

const Details = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    x
                </button>
                {props.content}
            </div>
        </div>
    )
}

export default Details