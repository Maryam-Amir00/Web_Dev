import React from 'react'

const TodoItem = ({todo, deleteTodo, toggleTodo}) => {

  return (
      <li className= {`flex items-center justify-between p-4 rounded-2xl shadow-md transition-all duration-300 ${todo.completed ? 'bg-green-100/70' : 'bg-white/70'}`}>
      <span className={`flex-1 font-medium cursor-pointer text-lg transition ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button className="ml-4 text-sm text-white bg-pink-400 hover:bg-pink-600 px-3 py-1 rounded-full shadow transition" onClick={() =>deleteTodo(todo.id)}>✖</button>
      </li>
  )
}

export default TodoItem
