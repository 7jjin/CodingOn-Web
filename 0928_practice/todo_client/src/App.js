import { useEffect, useState } from 'react';
import axios from 'axios';
import InputTodo from './InputTodo';

function App() {
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const todoData = async () => {
  //       const res = await axios({
  //         method: 'GET',
  //         url: 'http://localhost:8000/todos',
  //       });
  //       setLoading(false);
  //     };
  //     todoData();
  //   }, []);

  return (
    <div>
      <InputTodo></InputTodo>
    </div>
  );
}

export default App;
