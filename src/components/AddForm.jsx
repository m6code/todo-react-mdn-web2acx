import React, {useEffect, useState} from 'react'

const AddForm = props => {
    const [name, setName] = useState('');

    // NOTE: As written, this function has a bug: it doesn't prevent the user
    // from submitting an empty form. This is left as an exercise for developers
    // working through MDN's React tutorial.
    // DONE: Bugs was fixed, empty field is not added
    function handleSubmit(event) {
        event.preventDefault();
        if (name.trim().length > 0) props.addTask(name);
        else { alert("Please enter a task before submitting")}
        setName("");
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    return (
        <div className={"add-form"}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    aria-label="Enter a new task"
                    placeholder="What needs to be done?"
                    className="inputField"
                    name={"inputField"}
                    id={"addTodoTextField"}
                    value={name}
                    onChange={handleChange}
                />
                <button className={"btn addBtn heading"} type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddForm
