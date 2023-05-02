import React, {useState} from 'react';
import '../styles/Form.css'

/**
 * A wrapper class for HTML form
 * @param {} props 
 */
export default function Form(props) {
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        if (name !== "") {
            e.preventDefault();
            props.addTask(name)
            setName("")
        }
    }

return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            autoComplete="off"
            onChange={handleChange}
        ></input>
    </form>
)
}