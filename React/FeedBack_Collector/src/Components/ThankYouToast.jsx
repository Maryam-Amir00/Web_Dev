import React from 'react'
import reactDom from 'react-dom'

const ThankYouToast = ({onClose}) => {
  return (
    reactDom.createPortal(
        <div>
            💌 Thanks for your feedback!
            <button onClick={onClose}>❌</button>
        </div>,
        document.body
  )
);
}

export default ThankYouToast
