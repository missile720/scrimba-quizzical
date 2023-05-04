import React from 'react';
import {nanoid} from "nanoid"
import he from 'he'
import Question from './Question';
import "./Quiz.css";

function Quiz() {
  const [questionsData, setQuestionsData] = React.useState([]);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [quizOver, setQuizOver] = React.useState(false);
  const [quizReset, setQuizReset] = React.useState(false);

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(response => response.json())
      .then(data => setQuestionsData(data.results.map(questionData => {
        return {
          id: nanoid(),
          question: he.decode(questionData.question),
          answer: he.decode(questionData.correct_answer),
          choices: [questionData.correct_answer, ...questionData.incorrect_answers].map(he.decode).sort(() => Math.random() - 0.5),
          selected: "",
          correct: false,
          quizDone: false
        };
      })))
  }, [quizReset]);

  function selectButton(id, choice){
    setQuestionsData(prevQuestionsData => prevQuestionsData.map(question => {
      if(question.id === id){
        return {
          ...question,
          selected: choice
        };
      }
      else{
        return question;
      }
    }))
  }

  function checkQuiz(){
    setQuizOver(prevQuizOver => !prevQuizOver);
    
    for(let question of questionsData){
      if(question.answer === question.selected){
        setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
      }
    }
    
    setQuestionsData(prevQuestionsData => prevQuestionsData.map(question => {
      if(question.answer === question.selected){
        return {
          ...question,
          correct: true,
          quizDone: true
        };
      }
      else{
        return {
          ...question,
          quizDone: true
        };
      }
    }))
  }

  function resetQuiz(){
    setQuizReset(prevQuizReset => !prevQuizReset);
    setQuizOver(prevQuizOver => !prevQuizOver);
    setCorrectAnswers(0);
  }

  let questionList = questionsData.map(question => {
    return <Question
              key = {question.id}
              selectButton = {selectButton}
              {...question}
           />
  })

  return (
    <div className='quizScreen'>
      <div className='questionList'>
      {questionList}
      <div className='answerContainer'>
        {quizOver && <p className='results'>You scored {correctAnswers}/{questionsData.length} correct answers</p>}
        <button className='checkAnswer' onClick={quizOver ? resetQuiz : checkQuiz}>{!quizOver ? "Check answers" : "Play again"}</button>
      </div>
      </div>
    </div>
  )
}

export default Quiz