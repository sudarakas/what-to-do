import React from 'react';

export const Option = (props) => (

    <div className="option">
        <p className="option__text">{props.count}. {props.task}</p>
        <button
            onClick={
                ((e) => props.handleRemoveOption(props.task))
            }
            className="button button--link"
        >
            Remove
        </button>
    </div>

)