import EditableField from "./EditableField";

function TodoItem (props) {

    function onCheck () {
        props.updateTask({
            ...task,
            isDone: !task.isDone
        })
    }

    function onDelete () {
        props.deleteTask(task)
    }

    function onNewValue (value) {
        props.updateTask({
            ...task,
            title: value
        })
    }

    const task = props.task
    return (
        <li>
            <input type="checkbox"
                   id={task.id}
                   defaultChecked={task.isDone}
                   onChange={onCheck}
            />
            <label htmlFor={task.id}>
                <EditableField value={task.title} editMode={false} onNewValue={onNewValue}/>
            </label>
            <button type={"button"} onClick={onDelete}>❌</button>
        </li>
    )
}

export default TodoItem;