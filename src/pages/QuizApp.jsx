import React, {useState, useEffect} from "react"
import TestDetails from "../components/QuizApp/TestDetails"
import Questions from "../components/QuizApp/Questions"
import QuestionSubmit from "../components/QuizApp/QuestionSubmit"
import QuizFooter from "../components/QuizApp/QuizFooter"
import Header from "../components/Header/Header"  

export default function QuizApp() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = [
    {
      question:
        "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "50%",
    },
    {
      question:
        "In a certain store, the profit is 320% of the cost. If the cost increases by 25% ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "70%",
    },
    {
      question:
        "In a certain store, the profit is 120% of the cost. If the cost increases by 20% but the selling price remains constant, approximatel of the selling price is ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "35%",
    },
    {
      question: "In a certain store, th of the selling price is ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "90%",
    },
    {
      question:
        "In a certain storef the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "70%",
    },
    {
      question:
        "In a certain store. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is ?",
      options: ["50%", "70%", "35%", "90%"],
      correctOption: "35%",
    },
  ]

  const [allSelectedOptions, setAllSelectedOptions] = useState({})
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const handleOptionClick = (question, option) => {
    setAllSelectedOptions((prevState) => ({
      ...prevState,
      [question]: option,
    }))
  }

  // useEffect(() => {
  //   questions.forEach((question) => {
  //     if (allSelectedOptions[question.question] === question.correctOption) {
  //       setCorrectAnswers((prevState) => {
  //         console.log("prev state is: " + prevState)
  //         return prevState + 1
  //       })
  //     }
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allSelectedOptions])

  const handleSubmit = () => {
    let correctAnswers = 0

    questions.forEach((question) => {
      if (allSelectedOptions[question.question] === question.correctOption) {
        correctAnswers++
      }
    })
    setCorrectAnswers(correctAnswers)
    // console.log("correct answers: " + correctAnswers)
  }

  // console.log(allSelectedOptions)
  console.log(correctAnswers)

  return (
    <div>
      <Header />
      <TestDetails />
      <Questions
        questions={questions}
        allSelectedOptions={allSelectedOptions}
        handleOptionClick={handleOptionClick}
      />
      <QuestionSubmit handleSubmit={handleSubmit} />
      <QuizFooter />
    </div>
  )
}