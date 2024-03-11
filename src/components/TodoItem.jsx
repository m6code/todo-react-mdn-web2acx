import React from 'react'

const TodoItem = (props) => {
    return (
        <div className={"todo-item"}>
            <div className="todo-text">
                <input type="checkbox" checked={props.completed} onChange={props.toggleTaskCompleted(props.id)}/>
                <span
                    key={props.id}
                    id={props.id}>
                    {props.name}
                </span>
            </div>
            <div className="todo-actions">
                <button className={"btn deleteBtn"} onClick={props.deleteTask(props.id)}>Delete</button>
                <button className={"btn editBtn"} onClick={props.editTask(props.id)}>Edit</button>
            </div>
        </div>
    )
}
export default TodoItem;
