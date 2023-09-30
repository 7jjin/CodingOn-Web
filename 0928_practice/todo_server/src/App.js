import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const todoData = async () => {
            const res = await axios({
                method: "GET",
                url: "http://localhost:8000/todos",
            });
            console.log(res.data.data);
            setTodos(res.data.data);
            setLoading(false);
        };
        todoData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {todos.map((value) => {
                        return <li key={value.id}>{value.title}</li>;
                    })}
                </ul>
            )}
        </div>
    );
}

export default App;
