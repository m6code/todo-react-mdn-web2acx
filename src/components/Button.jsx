import React from 'react'

function Button(props) {
    return (
        <button className="btn" type="submit">{props.text}</button>
    )
}

export default Button
