import React from 'react'

const FeedBackButton = ({label , onclick , color}) => {
  return (
    <>
      <button className={`${color}`} onClick={onclick}>
        {label}
      </button>
    </>
  )
}

export default FeedBackButton
