import React from 'react'
import reactDom from 'react-dom'

const ThankYouToast = ({onClose}) => {
  return (
    reactDom.createPortal(
        <div className='fixed bottom-6 right-6 bg-pink-400 text-white px-4 py-2 rounded-full shadow-lg animate-bounce flex items-center gap-2'> 
            💌 Thanks for your feedback!
            <button onClick={onClose} className='text-sm ml-2'>❌</button>
        </div>,
        document.body
  )
);
}

export default ThankYouToast
