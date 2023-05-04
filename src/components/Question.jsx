import "./Question.css"

function Question(props) {
  const isQuizDone = props.quizDone;
  const isCorrect = props.correct;
  const selectedChoice = props.selected;

  const styles = {
    backgroundColor: isCorrect ? "#94D7A2" : "#F8BCBC",
    opacity: isQuizDone && isCorrect ? "1" : "0.5"
  };

  const stylesSelected = {
    ...styles,
    border: isQuizDone && "none",
    backgroundColor: !isQuizDone ? "#D6DBF5" : styles.backgroundColor,
    opacity: !isQuizDone ? "1" : styles.opacity
  };

  const stylesUnselected = {
    ...styles,
    backgroundColor: "transparent",
    opacity: isQuizDone ? "0.5" : "1"
  };

  const stylesCorrect = {
    backgroundColor: "#94D7A2",
    border: "none"
  };

  let buttons = props.choices.map((choice, index) => (
        <button
          key={index}
          className="answerChoice"
          disabled={isQuizDone}
          style={
            choice === selectedChoice
              ? stylesSelected
              : choice === props.answer && isQuizDone
              ? stylesCorrect
              : stylesUnselected
          }
          onClick={() => props.selectButton(props.id, choice)}
        >
          {choice}
        </button>
      ))

  return (
    <div>
      <h1 className="question">{props.question}</h1>
      {buttons}
      <hr className="line" />
    </div>
  );
}


export default Question