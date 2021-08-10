import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import EditableField from "./EditableField";

function TodoList(props) {
    const tasks = props.todo.tasks

    function addTask(newTask) {
        props.updateTodo({
            ...props.todo,
            tasks: [...tasks, newTask]
        })
    }

    function updateTask (taskUpdated) {
        let position = tasks.findIndex((task) => task.id === taskUpdated.id)
        if(position > -1){
            tasks.splice(position, 1, taskUpdated)
            props.updateTodo({
                ...props.todo,
                tasks: [...tasks]
            })
        }
    }

    function deleteTask(taskDeleted) {
        let pos = tasks.findIndex((task) => task.id === taskDeleted.id)
        if(pos > -1) {
            tasks.splice(pos, 1);
            props.updateTodo({
                ...props.todo,
                tasks: [...tasks]
            })
        }
    }

    function changeTitle (newTitle) {
        props.updateTodo({
            ...props.todo,
            title: newTitle
        })
    }

    function deleteTodo() {
        props.deleteTodo(props.todo)
    }

    return (
        <div className="TodoApp">
            <button onClick={deleteTodo}>❌</button>
            <h3>
                <EditableField value={props.todo.title} onNewValue={changeTitle}/>
            </h3>
            <TodoForm addTask={addTask}/>
            <hr/>
            <TodoItems tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}

export default TodoList;