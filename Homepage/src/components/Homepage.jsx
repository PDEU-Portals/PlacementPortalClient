import React from "react";
import Form from "./Form";
export default function Homepage() {
  return (
    <div className="Homepage flex justify-center pt-20 h-[557px] bg-[url('./images/Homepage_bg.png')]  bg-no-repeat bg-cover font-Poppins">
      <div className="Homepage_heading ml-24 m-0 p-0">
        {" "}
        <h2 className="text-orange mr-8 text-[4rem] font-medium">
          PLACEMENT PORTAL{" "}
          <span className="Homepage_span text-blue text-[6rem]">PDEU</span>
        </h2>{" "}
      </div>
      <Form />
    </div>
  );
}
