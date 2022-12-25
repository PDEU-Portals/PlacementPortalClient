import React from "react";
import Form from "./Form";
export default function Homepage() {
  return (
    <div className="Homepage flex justify-center pt-20 h-[557px] bg-[url('./images/Homepage_bg.png')] bg-no-repeat bg-cover font-Poppins">
      <div className="Homepage_heading w-[500px] m-0 p-0">
        {" "}
        <h2 className="text-orange mr-8 text-5xl font-medium">
          Placement Portal{" "}
          <span className="Homepage_span text-blue text-[4rem]">PDEU</span>
        </h2>{" "}
      </div>
      <Form />
    </div>
  );
}
