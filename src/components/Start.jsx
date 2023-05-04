import "./Start.css"

function Start(props) {
  return (
    <div className="startScreen">
        <div className="startContainer">
            <h1 className="startTitle">Quizzical</h1>
            <p className="startInfo">Questions are provided randomly from an API. Good luck!</p>
            <button className="startButton" onClick={props.startQuiz}>Start quiz</button>
        </div>
    </div>
  )
}

export default Start