import React from 'react'

const TodoItem = (props) => {
    return (
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
                <button className={"btn deleteBtn"} onClick={props.deleteTask(props.id)}>Delete</button>
                <button className={"btn editBtn"} onClick={props.editTask(props.id)}>Edit</button>
            </div>
        </div>
    )
}
export default TodoItem;
