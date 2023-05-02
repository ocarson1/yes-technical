import React, { useState } from 'react'
import '../styles/Task.css'

export default function Task(props) {

    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newAssignee, setNewAssignee] = useState('')

    function handleNameEdit(e) {
        setNewName(e.target.value)
    }
    
    function handleDateEdit(e) {
        setNewDate(e.target.value)
    }

    function handleAssigneeEdit(e) {
        setNewAssignee(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName, newDate, newAssignee)
        setIsEditing(false)
    }

    const viewMode = (
        <div className="task-container">
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleCompleted(props.id)}
            ></input>
            <div className="task-label">{props.name}</div>
            <div className="due-date">{props.due}</div>
            <div className="task-assignee">{props.assignee}</div>
            <div className="btn-group">
                <button type="button" className='btn-edit' onClick={() => setIsEditing(true)}>Edit</button>
                <button type="button" classNmae="btn-delete" onClick={() => props.deleteTask(props.id)}>Delete</button>
            </div>
        </div>
    )

    const editMode = (
        <form className="edit-container" onSubmit={handleSubmit}>
                <input className="task-label-input" type='text' onChange={handleNameEdit}></input>
                <input className="task-date-input" type='text' onChange={handleDateEdit}></input>
                <input className="task-assignee-input" type='text' onChange={handleAssigneeEdit}></input>
                <div className="btn-group">
                    <button type="button" className='btn-cancel' onClick={() => setIsEditing(false)}>Cancel</button>
                    <button type="submit" classNmae="btn-submit" onClick={() => props.deleteTask(props.id)}>Save</button>
                </div>
        </form>
    )


    return (
        <li className="todo"> {isEditing ?
            editMode : viewMode}
        </li>
    );
}