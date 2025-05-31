import React from 'react'
import reactDom from 'react-dom'

const ThankYouToast = ({onclose}) => {
  return (
    reactDom.createPortal(
        <div>
            💌 Thanks for your feedback!
            <button onClick={onclose}>❌</button>
        </div>,
        document.body
  )
);
}

export default ThankYouToast
