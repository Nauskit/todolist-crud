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
    return (
        <div className="home">
            <h2>Todo-list</h2>
            <Input fetchTodos={fetchTodos} />
            {
                todos.length === 0 ?
                    <div>No Result</div>
                    :
                    todos.map((todo, index) => (
                        <div className="task" key={index}>
                            <p>{todo.task}</p>
                        </div>
                    ))
            }
        </div>
    )
}
