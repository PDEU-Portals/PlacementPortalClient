import React from "react"

export default function TestDetails() {
  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="text-center">
          <h1 className="uppercase text-orange text-4xl">Technical Test</h1>
          <h2 className="text-blue font-semibold text-2xl">
            Database Management System
          </h2>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <div className="w-32">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="user"
              className="rounded-full"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-blue uppercase font-semibold">Anuj patel</h2>
            <h2 className="text-blue font-semibold">Computer Engineering</h2>
            <h2 className="text-orange  font-semibold">21BCP411</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
