import React, { useState } from 'react'

let biggestIndx
let max = 0

const Button = (props) => {
  return(
  <button onClick={props.onClick}>
  {props.text}
  </button>
  )
}

const DisplayVotes = (props) =>{
  console.log("Bigind: ", biggestIndx)
  return(
  <p>has {props.value} votes</p>
  )
}

const DispalyLeader = (prop) =>{
  return(
    <div>
      <p>amfoiajea</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  )
  


  const GetNewAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))
  

  const HandleVote = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
    FindLeader()
  }


  const FindLeader = () =>{
    const keys = Object.keys(points)
    let i

    for(i = 0; i < keys.length; i++){
      const value = points[keys[i]]
      console.log(value)
      if(value >= max){
        max = value;
        biggestIndx = i
        console.log("BigIndx: ", biggestIndx)
        console.log(anecdotes[biggestIndx])
        console.log(points[biggestIndx])
      }
    }
    if(biggestIndx === undefined){
      biggestIndx = 0;
      return (
        <p>No votes yet.</p>
      )
    }
    else{
      return(
      <div>
      <p>{anecdotes[biggestIndx]}</p>
      <DisplayVotes value = {points[biggestIndx]}/>
      </div>
      )
    }
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <DisplayVotes value = {points[selected]}/>
      <Button text = "vote" onClick = {HandleVote}/>
      <Button text = "next anecdote" onClick ={GetNewAnecdote}/>
      <h2>Anecdote with most votes</h2>
      <FindLeader props = {points}/>

      
    </div>
  )
}

export default App