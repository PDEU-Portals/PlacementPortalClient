import React from "react"
import {Icon} from "@iconify/react"

export default function Header() {
  return (
    <div className="bg-orange px-8 py-6">
      <div className="text-white text-center">
        <h1 className="uppercase text-3xl">Quiz for assesment</h1>
      </div>
      <div className="text-white mt-4 text-center flex justify-between">
        <h3 className="text-xl">Attempted Question: 9</h3>
        <div className="flex gap-1 items-center">
          <Icon icon="ic:sharp-timer" className="text-2xl" />
          <div className="text-xl">
            <span>01</span>
            <span>:</span>
            <span>29</span>
            <span>:</span>
            <span>59</span>
          </div>
        </div>
      </div>
      {/* This div to be hidden on large screens */}
      <div>
        <div className="flex gap-2 text-xl mt-3 justify-center">
          <span>Selected:</span>
          <div className="flex items-center gap-1 bg-white rounded-2xl px-3 py-[2px]">
            {/* This is dropdown */}
            <div className=" ">
              <h2>Question 1</h2>
            </div>
            <Icon icon="carbon:chevron-down" className=" text-2xl" />
          </div>
        </div>
        <div className="flex gap-8 justify-center mt-3 text-2xl text-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-600 self-end"></div>
            <h1>Answered</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D9D9D9] self-end"></div>
            <h1>Unattempted</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
