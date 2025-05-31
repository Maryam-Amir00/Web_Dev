import React from 'react'

const FeedBackButton = ({label , onClick , color}) => {
  return (
    <>
      <button className={`transition-all duration-300 px-6 py-2 rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 m-2  ${color}`} onClick={onClick}>
        {label}
      </button>
    </>
  )
}

export default FeedBackButton
