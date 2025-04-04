import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";

export default function Home() {

    const [todos, setTodos] = useState([]);

    const fetchTodos = () => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        fetchTodos();
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(result =>
                location.reload(result)
            )
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result =>
                location.reload(result)
            )
            .catch(err => console.log(err))
    }

    return (
        <div className="home">
            <h1>TODOLIST-CRUD</h1>
            <Input fetchTodos={fetchTodos} />
            {
                todos.length === 0 ?
                    <div>No Result</div>
                    :
                    todos.map((todo, index) => (
                        <div className="task" key={index}>
                            <div className="task-item">
                                <div onClick={() => handleEdit(todo._id)} className="check-box">O</div>
                                <div className="task-list"><p className={todo.done ? "line_through" : ""}>{todo.task}</p></div>
                                <div onClick={() => handleDelete(todo._id)} className="task-delete">X</div>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}
