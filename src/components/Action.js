import React from 'react';

export const Action = (props) => (
    <div>
        <button
            disabled={props.numTask > 0 ? false : true}
            onClick={props.hanldeTaskSelect}
            className="main-button"

        >What Task?</button>
    </div>
)