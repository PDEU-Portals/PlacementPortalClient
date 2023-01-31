import React from "react"

export default function QuestionSubmit(props) {
  const {handleSubmit} = props
  return (
    <div className="mt-8 flex justify-center gap-6">
      <button
        className="bg-blue text-white uppercase px-6 py-1 rounded-lg shadow-options text-xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button className="bg-[#F1F1F1] px-6 py-1 rounded-lg shadow-options text-xl">
        Reset
      </button>
    </div>
  )
}
