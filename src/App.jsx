import React from 'react'
import AddForm from "./components/AddForm.jsx";
import './App.css'
import Filter from "./components/Filter.jsx";
import TodoItem from "./components/TodoItem.jsx";

function App() {
    return (
        <>
            <h1 className={"app-title"}>Todo Matic</h1>
            <div className="backdrop">
                <AddForm/>
                <Filter/>
                <div> 5 Tasks Left</div>
                <hr/>
                <TodoItem/>
            </div>
        </>
    )
}

export default App
