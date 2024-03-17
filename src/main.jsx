import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {nanoid} from "nanoid";


// eslint-disable-next-line react-refresh/only-export-components
const DATA = [
    { id: "todo-" + nanoid(7), name: "Read UI/UX Book", completed: true },
    { id: "todo-" + nanoid(7), name: "Refactor Code blocks", completed: false },
    { id: "todo-" + nanoid(7), name: "Push to Repo", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)
