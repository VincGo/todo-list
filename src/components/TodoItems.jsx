import TodoItem from "./TodoItem";

function TodoItems (props) {
    const tasks = props.tasks
    const nbDone = tasks.filter((t) => t.isDone).length

    function updateTask(taskUpdated) {
        props.updateTask(taskUpdated)
    }

    function deleteTask(taskDeleted) {
        props.deleteTask(taskDeleted)
    }

    return (
        <div className={"todolist-items"}>
            <p> {nbDone} /{tasks.length} effectuées</p>
            <ul>
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                    ))}
            </ul>
        </div>
        )
}

export default TodoItems