import { useState } from "react"
import axios from 'axios';


export default function Input({ fetchTodos }) {
    const [task, setTask] = useState('');
    const handleSubmit = () => {
        if (task !== "") {
            axios.post('http://localhost:3001/add', { task: task })
                .then(() => {
                    fetchTodos();
                    setTask("")
                })

                .catch(err => console.log(err))
        } else {
            alert("Fill value");
        }
    }
    return (
        <div className="input_form">
            <input type="text" placeholder="Add Task"
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
            />
            <button type="button" onClick={handleSubmit}>Add</button>
        </div>
    )
}
