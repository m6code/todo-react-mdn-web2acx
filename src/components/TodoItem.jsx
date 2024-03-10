import React from 'react'

const TodoItem = (props) => {
    return (
        <div className={"todo-item"}>
            <div className="todo-text">
                <input type="checkbox"/>
                <span>Read a book </span>
            </div>
            <div className="todo-actions">
                <button className={"btn deleteBtn"}>Delete</button>
                <button className={"btn editBtn"}>Edit</button>
            </div>
        </div>
    )
}
export default TodoItem;
