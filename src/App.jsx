import React, {useEffect, useState} from 'react'
import AddForm from "./components/AddForm.jsx";
import './App.css'
import Filter from "./components/Filter.jsx";
import TodoItem from "./components/TodoItem.jsx";
import {nanoid} from "nanoid";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);
    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        console.log(tasks)
    }, [tasks]);

    return (
        <div className={"container"}>
            <h1 className={"app-title heading"}>Todo Matic</h1>
            <div className="backdrop">
                <AddForm addTask={addTask}/>
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
