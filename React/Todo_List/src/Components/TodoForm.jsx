import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {

  const [input , setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() !== "") {
      addtodo(input);
      setInput("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex mb-6'>
        <input className='flex-grow bg-white/70 backdrop-blur-md text-gray-800 placeholder-gray-500 rounded-xl px-4 py-2 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition' type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="What's on your mind?" />
        <button className='bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 rounded-xl ml-1 transition-all duration-300' type='submit'>Add ✨</button>
      </form>
    </div>
  )
}

export default TodoForm
