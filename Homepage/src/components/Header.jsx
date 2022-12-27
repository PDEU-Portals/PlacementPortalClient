import React from "react";
import { ReactDOM } from "react";
import image from "../images/Nav_logo.png";
export default function Header() {
  return (
    <div>
      <nav className="Nav flex items-center justify-between pl-4 pr-4 bg-blue font-Poppins">
        <img src={image} alt="logo" />
        <ul className="nav__elements flex list-none">
          <li class="nav__item p-[10px]">
            <a
              href="#home"
              className=" no-underline text-white text-lg hover:text-orange hover:border-b-[1px] hover:border-orange"
            >
             Recruiter’s Panel
            </a>
          </li>

          <li className="nav__item p-[10px]">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange hover:border-b-[1px] hover:border-orange"
            >
            Admin
            </a>
          </li>

          <li className="nav__item p-[10px]">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange hover:border-b-[1px] hover:border-orange"
            >
              Placement Details
            </a>
          </li>

          <li className="nav__item p-[10px]">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange hover:border-b-[1px] hover:border-orange"
            >
              Home
            </a>
          </li>

          <li className="nav__item p-[10px]">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange hover:border-b-[1px] hover:border-orange"
            >
              Home
            </a>
          </li>

          <li className="nav__item button p-[10px] inline-block bg-orange rounded-[0.3rem] mr-3 pl-3  hover:bg-white hover:text-orange">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange pr-2 pl-1"
            >
              Home
            </a>
          </li>

          <li className="nav__item button p-[10px] inline-block bg-orange rounded-[0.3rem] mr-3  pl-3 hover:bg-white hover:text-orange">
            <a
              href="#home"
              className="no-underline text-white text-lg hover:text-orange pr-2 pl-1 "
            >
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
