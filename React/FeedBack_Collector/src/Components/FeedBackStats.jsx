import React from 'react'

const FeedBackStats = ({good , neutral , bad}) => {
    const total = good + neutral + bad;
    const average = total ? ((good - bad) / total).toFixed(2) : 0;
    const positivePercentage = total ? ((good / total) * 100).toFixed(2) : 0;

  return (
    <>
      <div className='bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-inner space-y-2 text-gray-700 text-left'>
        <p className='text-lg font-medium'> 📊 <span className='font-bold'>FeedBack Summary</span></p>
        <p>😊 Good: <span className='font-bold'>{good}</span></p>
        <p>😐 Neutral: <span className='font-bold'>{neutral}</span></p>
        <p>😢 Bad: <span className='font-bold'>{bad}</span></p>
        <hr className='my-2' />
        <p>Total: <span className='font-bold'>{total}</span></p>
        <p>Average: <span className='font-bold'>{average}</span></p>
        <p>Positive: <span className='font-bold'>{positivePercentage}%</span></p>
      </div>
    </>
  )
}

export default FeedBackStats
