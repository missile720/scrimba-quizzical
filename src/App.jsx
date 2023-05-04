import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import './App.css'

function App() {
  //Requirements
  //Pull 5 questions from the OTDB API https://opentdb.com/api_config.php
  //Tally correct answers after "check answers" is clicked
  //Styled & polished
  const [start, setStart] = React.useState(false)

  function startQuiz(){
    setStart(prevStart => !prevStart);
  }

  return (
    <div>
      {start ? <Quiz/> : <Start startQuiz = {startQuiz}/>}
    </div>
  )
}

export default App
