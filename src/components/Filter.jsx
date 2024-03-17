import React, {useEffect, useState} from 'react'

function Filter(props) {
    const [selectedValue, setSelectedValue] = useState("all")
    function handleChange(event) {
        setSelectedValue(event.target.value)
        // props.setFilter(event.target.value);
    }

    useEffect(() => {
        props.setFilter(selectedValue);
    }, [selectedValue]);

    return (
        <div className={"filter"}>
            <label htmlFor="selectMenu">Filter: </label>
            <select id={"selectMenu"} name="task-filter" value={selectedValue} onChange={handleChange}>
                <option value={"all"}>All</option>
                <option value={"active"}>Active</option>
                <option value={"completed"}>Completed</option>
            </select>
        </div>
    )
}

export default Filter


// aria-pressed={props.isPressed}
// onClick={() => props.setFilter(props.name)}
