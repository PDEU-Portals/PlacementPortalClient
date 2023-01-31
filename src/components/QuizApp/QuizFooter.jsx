import React from "react"

export default function QuizFooter() {
  return (
    <div className="flex justify-center my-10 items-center gap-3">
      <div className="">
        <h1 className="text-center rounded-full shadow-options px-3 py-4 font-semibold text-2xl">
          5 / 6
        </h1>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-blue">Congratulations!!</h1>
      </div>
    </div>
  )
}
