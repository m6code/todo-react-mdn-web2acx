import React, {useEffect, useState} from 'react'
import AddForm from "./components/AddForm.jsx";
import './App.css'
import Filter from "./components/Filter.jsx";
import TodoItem from "./components/TodoItem.jsx";
import {nanoid} from "nanoid";
import Todo from "../ref/src/components/Todo.jsx";


const FILTER_MAP = {
    all: () => true,
    active: (task) => !task.completed,
    completed: (task) => task.completed,
};

// const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState("all");


    const taskList = tasks
        ?.filter(FILTER_MAP[filter])
        .map((task) => (
            <TodoItem
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));
    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(7), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} left`;

    function toggleTaskCompleted (id) {
        const updatedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new obkect
                // whose `completed` prop has been inverted
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id) {
        // Todo: implement edit task
    }

    useEffect(() => {
        console.log(tasks)
        console.log(filter)
    }, [tasks, filter]);

    return (
        <div className={"container"}>
            <h1 className={"app-title heading"}>Todo Matic</h1>
            <div className="backdrop">
                <AddForm addTask={addTask}/>
                <Filter setFilter={setFilter}/>
                <div className={"task-left"}> {headingText}</div>
                <hr/>
                {taskList}
            </div>
        </div>
    )
}

export default App
