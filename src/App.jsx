import { useState } from 'react';


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total !== 0 ? ((good - bad) / total).toFixed(2) : '0';
  const positive = total !== 0 ? (good / total * 100).toFixed(2) + "%" : '0%';


  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr><td>Good:</td><td>{good}</td></tr>
          <tr><td>Neutral:</td><td>{neutral}</td></tr>
          <tr><td>Bad:</td><td>{bad}</td></tr>
          <tr><td>Total:</td><td>{total}</td></tr>
          <tr><td>Average:</td><td>{average}</td></tr>
          <tr><td>Positive:</td><td>{positive}</td></tr>
        </tbody>
      </table>
    </div>
  );
};


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h1>Give feedback</h1>


      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>


      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};


export default App;

