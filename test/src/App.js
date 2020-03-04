import React from 'react';
import './App.css';

const TIME_LIMIT = 0
const TITLE_STATE = 5
const QUESTION_STATE = 1
const FINAL_STATE = 2

class QuizQuestion extends React.Component {
  render() {
      return <>
      <h1>{this.props.questions}</h1>
      {this.props.answers.map((v, i) =>
      <input className="answers" onClick={()=> this.props.nextQuestion()} type = "button" key={i} value = {v.text} />)}
      </>
  }
}

class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleText: "Welcome to our Quiz!",
      counter: 0,
      currentState: TITLE_STATE
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct) {
    console.log("BUTTON PRESSED")
    if(correct) {
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestions == questions.length -1) {
      console.log("DONE")
    } else {
    clearInterval(this.timer)
    console.log(this.state.currentQuestions)
    this.setState({
      titleText: "You answered x",
      currentState: FINAL_STATE
    })
  }

  countdown() {
    console.log("Handling Interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({titleText: `Starting the Quiz`,
      counter: this.state.counter +1
      })
    } else {
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
      this.timer = setInterval()
      )
      clearInterval(this.timer)
    }
  }

  start() {
    console.log("Starting!")
    this.setState({titleText: "Starting the Quiz!", counter: 0})
    this.timer = setInterval(() => {
    }, 1000);
  }


  render() {
    return (
      <>
      <p>${this.timeLimit - this.state.counter}</p>
      {((this.state.currentState === TITLE_STATE) ?
      <>
      <h2>{this.state.titleText}</h2>
      <input className="start" type="button" value="start" onClick={()=>this.
        start()} />
      </>
      :
      <p>Score: {}</p>)}
      </>)
  }
}


<QuizQuestion answers={questions[0].possibleAnswers}
question = {questions[this.state.currentQuestions].question}
nextQuestion={}

function App() {
  return (
    <div className="App">
      <TitlePage></TitlePage>
    </div>
  );
}

export default App;
