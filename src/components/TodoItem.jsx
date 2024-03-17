import {useEffect, useRef, useState} from 'react'

function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);

    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    const wasEditing = usePrevious(isEditing);

    function handleChange(event) {
        setNewName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (newName.trim().length > 0) props.editTask(props.id, newName);
        else {
            alert("Please enter a task before submitting")
        }
        setNewName("");
        setIsEditing(false);
    }

    const editingTemplate = (
        <form className="todo-item" onSubmit={handleSubmit}>
            <div className="todo-text">
                <input
                    id={props.id}
                    className="inputField"
                    type="text"
                    value={newName}
                    onChange={handleChange}
                    ref={editFieldRef}
                />
            </div>
            <div className="todo-actions">
                <button
                    type="button"
                    className="btn deleteBtn todo-cancel"
                    onClick={() => setIsEditing(false)}>
                    Cancel
                </button>

                <button type="submit" className="btn editBtn">
                    Save
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className={"todo-item"}>
            <div className="todo-text">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label
                    key={props.id}
                    htmlFor={props.id}
                    className={props.completed ? "completed-task" : ""}
                >
                    {props.name}
                </label>
            </div>
            <div className="todo-actions">
                <button className={"btn deleteBtn"} onClick={() => props.deleteTask(props.id)}>Delete</button>
                <button
                    className={"btn editBtn"}
                    ref={editButtonRef}
                    onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        } else if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);

    return (
        <>
            {isEditing ? editingTemplate: viewTemplate}
            {/*{editingTemplate}*/}
        </>

    )
}
export default TodoItem;
