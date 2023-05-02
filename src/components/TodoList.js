import React, {useState} from 'react'
import Form from './Form'
import Task from './Task'
import {nanoid} from 'nanoid'
import '../styles/TodoList.css'


function TodoList(props) {
    const [title, setTitle] = useState(props.title)
    const [tasks, setTasks] = useState(props.tasks)
    const [completedTasks, setCompletedTasks] = useState(props.completedTasks)

    function addTask(name) {
        const newTask = {id: `todo-${nanoid()}`, name, due: "", assignee: ""}
        setTasks([...tasks, newTask]) // everything already in tasks + a new element
      }

    function toggleCompleted(id) {
        tasks.map((task) => {
            if (id === task.id) {
                let index = [tasks].indexOf(task)
                setTasks([tasks].splice(index, 1))
                setCompletedTasks([...completedTasks, task])
            }
        })
    }
    
    const taskList = tasks.map((task) => (
        <Task 
            id={task.id}
            name={task.name}
            due={task.due}
            assignee={task.assignee}
            toggleCompleted={toggleCompleted}
            />
    )
    )

    return (
        <div className="todo-list">
            <h2>{title}</h2>
            {taskList}
            <Form addTask={addTask}/>
            <h3>Completed:</h3>


        </div>
    )
}

export default TodoList