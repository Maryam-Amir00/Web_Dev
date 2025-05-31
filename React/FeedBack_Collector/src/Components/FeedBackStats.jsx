import React from 'react'

const FeedBackStats = ({good , neutral , bad}) => {
    const total = good + neutral + bad;
    const average = total ? ((good - bad) / total).toFixed(2) : 0;
    const positivePercentage = total ? ((good / total) * 100).toFixed(2) : 0;

  return (
    <>
      <div>
        <p> 📊 <span>FeedBack Summary</span></p>
        <p>😊 Good: <span>{good}</span></p>
        <p>😐 Neutral: <span>{neutral}</span></p>
        <p>😢 Bad: <span>{bad}</span></p>
        <hr />
        <p>Total: <span>{total}</span></p>
        <p>Average: <span>{average.toFixed(2)}</span></p>
        <p>Positive: <span>{positivePercentage.toFixed(1)}%</span></p>
      </div>
    </>
  )
}

export default FeedBackStats
