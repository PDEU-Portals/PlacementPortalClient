import React from "react";
import { ReactDOM } from "react";
import image from "../images/Nav_logo.png";
export default function Header() {
  return (
    <div>
      <nav className="Nav">
        <img src={image} alt="logo" />
        <ul className="nav__elements">
              <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
             
              <li className="nav__item">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item button">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item button">
                <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
      </ul>
      </nav>
    </div>
  );
}