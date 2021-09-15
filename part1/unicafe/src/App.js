import React, { useState } from 'react'



const DisplayHeader = ({text}) => <h1>{text}</h1>

const StatisticsLine = (props) => {
return(
<tr>
  <td>{props.name}</td> 
  <td>{props.value}</td>
</tr>
)
}


const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return(
      <div>No feedback given</div>
    )
  }
  const positive = props.good/total * 100 + "%"
  const average = (props.good - props.bad)/total
  return(
    <table>
      <tbody>
      <StatisticsLine name = "good" value = {props.good}/>
      <StatisticsLine name = "neutral" value = {props.neutral}/>
      <StatisticsLine name = "bad" value = {props.bad}/>
      <StatisticsLine name = "all" value = {total}/>
      <StatisticsLine name = "average" value = {average}/>
      <StatisticsLine name = "positive" value = {positive}/>
      </tbody>
    </table>
  
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