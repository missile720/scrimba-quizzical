import "./Question.css"

function Question(props) {
    console.log(props.quizDone)

    const stylesSelected = {
        backgroundColor: !props.quizDone ? "#D6DBF5" :  props.correct ? "#94D7A2" : "#F8BCBC",
        opacity: !props.quizDone ? "1" : props.correct ? "1" : ".5",
        border: props.quizDone && "none"
    }

    const stylesUnselected = {
        backgroundColor: "transparent",
        opacity: props.quizDone ? "0.5" : "1"
    }

    const stylesCorrect = {
        backgroundColor: "#94D7A2",
        border: "none"
    }

  return (
    <div>
        <h1 className='question'>{props.question}</h1>
        <button className='answerChoice' disabled={props.quizDone} style={props.choices[0] === props.selected ? stylesSelected : props.correct ? stylesUnselected : props.choices[0] === props.answer && props.quizDone ? stylesCorrect : stylesUnselected} onClick={() => props.selectButton(props.id,props.choices[0])}>{props.choices[0]}</button>
        <button className='answerChoice' disabled={props.quizDone} style={props.choices[1] === props.selected ? stylesSelected : props.correct ? stylesUnselected : props.choices[1] === props.answer && props.quizDone ? stylesCorrect :stylesUnselected} onClick={() => props.selectButton(props.id,props.choices[1])}>{props.choices[1]}</button>
        <button className='answerChoice' disabled={props.quizDone} style={props.choices[2] === props.selected ? stylesSelected : props.correct ? stylesUnselected : props.choices[2] === props.answer && props.quizDone ? stylesCorrect :stylesUnselected} onClick={() => props.selectButton(props.id,props.choices[2])}>{props.choices[2]}</button>
        <button className='answerChoice' disabled={props.quizDone} style={props.choices[3] === props.selected ? stylesSelected : props.correct ? stylesUnselected : props.choices[3] === props.answer && props.quizDone ? stylesCorrect :stylesUnselected} onClick={() => props.selectButton(props.id,props.choices[3])}>{props.choices[3]}</button>
        <hr className='line'/>
    </div>
  )
}

export default Question