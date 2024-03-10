import React from 'react'
import Button from "./Button.jsx";

const TodoItem = (props) => {
    return (
        <div className={"todo-item"}>
            <div className="todo-text">
                <input type="checkbox"/>
                Read a book
            </div>
            <div className="todo-actions">
                <Button className={"deleteBtn"} text={"Delete"}/>
                <Button className={"editBtn"}  text={"Edit"}/>
            </div>
        </div>
    )
}
export default TodoItem;
