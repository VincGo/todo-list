import './App.css';
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";
import {useEffect, useState} from "react";
import StorageServices from "./services/storageService";

function App() {
    const monTitre = 'Todo liste'
    const [todoLists, setTodoLists] = useState([])

    useEffect(() => {
        const data = StorageServices.getTodolists()
        setTodoLists(data);
    }, [])

    useEffect(() => {
        StorageServices.saveTodolists(todoLists)
    }, [todoLists])

    function updateTodo (todoUpdated) {
        let pos = todoLists.findIndex(todo => todo.id === todoUpdated.id)
        if (pos > -1) {
            todoLists.splice(pos, 1, todoUpdated)
            setTodoLists([...todoLists])
        }
    }

    function addList () {
        const newList  = {
            id: nanoid(),
            title: 'New todo',
            tasks: []
        }

        setTodoLists([newList, ...todoLists])
    }

    function deleteTodo(todoDeleted) {
        let pos = todoLists.findIndex(todo => todo.id === todoDeleted.id)
        if (pos > -1) {
            todoLists.splice(pos, 1,)
            setTodoLists([...todoLists])
        }
    }

    return (
        <div className="App">
            <h1>{monTitre}</h1>
            <button onClick={addList}>Add todolist</button>
            <div id={'todoListe'}>
                {todoLists.map(todo => (
                    <TodoList key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                ))}
            </div>
        </div>
    )
}

export default App;
