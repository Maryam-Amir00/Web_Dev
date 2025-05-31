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
      <div className='min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center p-6'>
        <div className='backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center space-y-6'>
          <h1 className='text-3xl font-bold text-pink-600'>
          💖 Feedback Collector 💖
          </h1>
          <div className='flex justify-center gap-4'>
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
