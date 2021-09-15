import React, { useState } from 'react'



const DisplayHeader = ({text}) => <h1>{text}</h1>

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total == 0) {
    return(
      <div>No feedback given</div>
    )
  }
  const positive = props.good/total * 100
  const average = (props.good - props.bad)/total
  return(
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
)
}
const Button = (props) => {
  return(
  <button onClick={props.onClick}>
  {props.text}
  </button>
  )
}





const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  const HandleGood = () => setGood(good +1)
  const HandleNeutral = () => setNeutral(neutral +1)
  const HandleBad = () => setBad(bad +1)
  
 
  return (
    <div>
      <DisplayHeader text = "Give Feedback"/>
      <Button onClick={HandleGood} text = "Good"/>
      <Button onClick={HandleNeutral} text = "Neutral"/>
      <Button onClick={HandleBad} text = "Bad"/>
      <DisplayHeader text = "Statistics"/>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}/>

    </div>
  )
}

export default App