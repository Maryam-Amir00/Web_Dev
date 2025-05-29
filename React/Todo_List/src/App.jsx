import { useState } from 'react'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {

  const [todos, settodos] = useState([]);
  const [filter, setfilter] = useState('all');

  const addtodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    settodos([newTodo, ...todos])
  };

  const deleteTodo = (id) => {
    settodos(todos.filter(todo => todo.id !== id))
  };

  const toggleTodo = (id) => {
    settodos( todos.map(todo => todo.id === id ? {...todo , completed : !todo.completed}: todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  })

  return (
    <>
        <div className='min-h-screen bg-gradient-to-tr from-pink-200 via-purple-300 to indigo-200 flex items-center justify-center px-4 py-12'>
          <div className='backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 w-full max-w-xl '>
            <h1 className='text-4xl font-bold text-center text-purple-800 mb-6 drop-shadow-md'>🌸 TO-DO LIST 🌸</h1>
            <TodoForm  addtodo = {addtodo}/>
            <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          </div>
        </div>
    </>
  )
}

export default App
