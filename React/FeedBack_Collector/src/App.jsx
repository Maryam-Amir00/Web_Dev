import React, {useState} from 'react'
import FeedBackButton from './Components/FeedBackButton'
import FeedBackStats from './Components/FeedBackStats';
import ThankYouToast from './Components/ThankYouToast';

function App() {

  const [good , setGood] = useState(0);
  const [neutral , setNeutral] = useState(0);
  const [bad , setBad] = useState(0);
  const [showToast , setShowToast] = useState(false);

  const handleOnClick = (type) => {
    if (type === "good") setGood(good + 1);
    if(type === "neutral") setNeutral(neutral + 1);
    if(type === "bad") setBad(bad + 1);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }
  
  return (
    <>
      <div>
        <div>
          <h1>
          💖 Feedback Collector 💖
          </h1>
          <div>
            <FeedBackButton label = "😊 Good" color="bg-green-400" onClick={() => handleOnClick('good')}/>
            <FeedBackButton label = "😐 Neutral" color="bg-yellow-400" onClick={() => handleOnClick('neutral')}/>
            <FeedBackButton label = "😞 Bad" color="bg-red-400" onClick={() => handleOnClick('bad')}/>
          </div>
            <FeedBackStats good={good} neutral={neutral} bad={bad} />
        </div>
          {showToast && <ThankYouToast onClose = {() => setShowToast(false)} />}
      </div>
    </>
  )
}

export default App
