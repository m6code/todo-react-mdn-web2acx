import React from 'react'
import AddForm from "./components/AddForm.jsx";
import './App.css'
import Filter from "./components/Filter.jsx";
import TodoItem from "./components/TodoItem.jsx";

function App() {
    return (
        <div className={"container"}>
            <h1 className={"app-title heading"}>Todo Matic</h1>
            <div className="backdrop">
                <AddForm/>
                <Filter/>
                <div className={"task-left"}> 5 Tasks Left</div>
                <hr/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    )
}

export default App
