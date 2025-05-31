import React from 'react'

const FeedBackButton = ({label , onClick , color}) => {
  return (
    <>
      <button className={`${color}`} onClick={onClick}>
        {label}
      </button>
    </>
  )
}

export default FeedBackButton
