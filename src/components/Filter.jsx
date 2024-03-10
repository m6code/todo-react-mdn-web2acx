import React from 'react'

function Filter() {
    return (
        <div>
            <label htmlFor="selectMenu">Filter: </label>
            <select id={"selectMenu"}>
                <option id={"all"} value={"all"}>All</option>
                <option id={"active"} value={"active"}>Active</option>
                <option id={"completed"} value={"completed"}>Completed</option>
            </select>
        </div>
    )
}

export default Filter
