import { useRef } from 'react';
import { nanoid } from "nanoid";

function TodoForm(props) {
    const inputRef = useRef()

    function submitForm (event) {
        event.preventDefault()

        const newTaskTitle = inputRef.current.value.trim();
        const newTask = {
            id: nanoid(),
            title: newTaskTitle,
            isDone: false
        }

        props.addTask(newTask)

        inputRef.current.value = ""
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" ref={inputRef}/>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default TodoForm;