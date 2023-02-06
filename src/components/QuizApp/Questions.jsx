import React from "react"

export default function Questions(props) {
  const {questions, allSelectedOptions, handleOptionClick} = props

  const questionList = questions.map((question, index) => (
    <div
      key={index}
      className="flex gap-3 shadow-question rounded-xl mx-4 px-3 py-4"
    >
      <h1 className="font-bold text-xl"> {index + 1}.</h1>
      <div>
        <p className="text-lg justify-center">{question.question}</p>
        <div className="grid grid-cols-2 gap-5 mt-3 text-xl">
          {question.options.map((option, index) => (
            <h1
              key={index}
              className={`shadow-options rounded-lg px-3 py-2 w-3/4 text-center cursor-pointer ${
                allSelectedOptions[question.question] === option
                  ? "bg-green-600"
                  : "bg-transparent"
              } `}
              onClick={() => handleOptionClick(question.question, option)}
            >
              {option}
            </h1>
          ))}
        </div>
      </div>
    </div>
  ))

  return <div className="mt-8 space-y-8">{questionList}</div>
}
