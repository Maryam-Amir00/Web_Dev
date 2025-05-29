import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
  return (
      <ul className='space-y-4'>
        {todos.length === 0 ? (<p className='text-center text-gray-600 '>No tasks yet. Add something!</p>) : (
          todos.map((todo) => (
            <TodoItem 
            key = {todo.id}
            todo = {todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            />
          ))
        )
        }
      </ul>
  )
}

export default TodoList
