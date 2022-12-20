import React from "react";
import { ReactDOM } from "react";
import image from "../images/Nav_logo.png";

export default function Article() {
  return (
    <div className="Article">
        <div>
      <div class="Main_Card">
        <div className="Main_Card_Img">
          {/* <img src={image} alt="img" /> */}
        </div>

        <div class="Main_Card_Heading">
          <h4>Heading</h4>
          <h5>Sub-heading</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
            illo, libero harum labore itaque consectetur amet?
          </p>
          <ul>
            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link ">
               Home
              </a>
            </li>

            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link ">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>

      <div className="Side_Card_parent">
      <div className="Side_Card">
        <div className="Side_Card_Img">
          {/* <img src={image} alt="img" /> */}
        </div>
        <div class="Side_Card_Heading">
          <h4>Heading</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
            illo, libero harum labore itaque consectetur amet?
          </p>
          <ul>
            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link ">
                Home
              </a>
            </li>

            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Side_Card">
        <div className="Side_Card_Img">
          {/* <img src={image} alt="img" /> */}
        </div>
        <div class="Side_Card_Heading">
          <h4>Heading</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
            illo, libero harum labore itaque consectetur amet?
          </p>
          <ul>
            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link">
              Home
              </a>
            </li>

            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="Side_Card">
        <div className="Side_Card_Img">
          {/* <img src={image} alt="img" /> */}
        </div>
        <div class="Side_Card_Heading">
          <h4>Heading</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
            illo, libero harum labore itaque consectetur amet?
          </p>
          <ul>
            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>

            <li className="blue_button_item blue_button">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>

        


    </div>
  );
}
