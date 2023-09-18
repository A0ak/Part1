import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => setGood(good + 1);
  const handleNeutralFeedback = () => setNeutral(neutral + 1);
  const handleBadFeedback = () => setBad(bad + 1);

  const totalFeedback = good + neutral + bad;

  const averageScore = totalFeedback ? ((good - bad) / totalFeedback).toFixed(2) : 0;

  const positivePercentage = totalFeedback ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {totalFeedback}</p>
      <p>Average: {averageScore}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  )
};

export default App;