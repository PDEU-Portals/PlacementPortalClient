import React from "react";
import { ReactDOM } from "react";
import image from "../images/Nav_logo.png";

export default function Article() {
  return (
    <div className="Article flex w-full h-auto pt-8 pb-12 bg-blue font-Poppins">
      <div>
        <div class="Main_Card bg-white rounded-lg m-4 h-[95.5%]">
          <div className="Main_Card_Img h-[24rem] overflow-hidden">
            {/* <img src={image} alt="img" /> */}
          </div>

          <div class="Main_Card_Heading">
            <h4 className="p-0 m-0 pb-[10px] text-2xl pl-4 text-orange font-medium">
              Heading
            </h4>
            <h5 className="m-0 p-0 pb-[5px] pl-4 text-black text-lg">
              Sub-heading
            </h5>
            <p className="m-0 p-0 text-base pl-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
              illo, libero harum labore itaque consectetur amet?
            </p>
            <ul className="m-0 pl-4 pt-[10px]">
              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px]  pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>

              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px]  pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Side_Card_parent flex flex-col">
        <div className="Side_Card flex bg-white h-48 rounded-lg m-4">
          <div className="Side_Card_Img h-full overflow-hidden">
            {/* <img src={image} alt="img" /> */}
          </div>
          <div class="Side_Card_Heading p-4 pt-[10px]">
            <h4 className="m-0 p-0 text-orange text-2xl font-medium">
              Heading
            </h4>
            <p className="m-0 p-0 text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
              illo, libero harum labore itaque consectetur amet?
            </p>
            <ul className="m-0 p-0 pt-[10px]">
              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px] pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>

              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px]  pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Side_Card flex bg-white h-48 rounded-lg m-4">
          <div className="Side_Card_Img h-full overflow-hidden">
            {/* <img src={image} alt="img" /> */}
          </div>
          <div class="Side_Card_Heading p-4 pt-[10px]">
            <h4 className="m-0 p-0 text-orange text-2xl font-medium">
              Heading
            </h4>
            <p className="m-0 p-0 text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
              illo, libero harum labore itaque consectetur amet?
            </p>
            <ul className="m-0 p-0 pt-[10px]">
              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px] pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>

              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px] pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Side_Card flex bg-white h-48 rounded-lg m-4">
          <div className="Side_Card_Img h-full overflow-hidden">
            {/* <img src={image} alt="img" /> */}
          </div>
          <div class="Side_Card_Heading p-4 pt-[10px]">
            <h4 className="m-0 p-0 text-orange text-2xl font-medium">
              Heading
            </h4>
            <p className="m-0 p-0 text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, consequatur ad eius fugiat neque iusto hic, cupiditate
              illo, libero harum labore itaque consectetur amet?
            </p>
            <ul className="m-0 p-0 pt-[10px]">
              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px] pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
                  Home
                </a>
              </li>

              <li className="blue_button_item blue_button p-[10px] inline-block bg-blue rounded mr-[10px]  pl-3 border-solid border-[1px] border-blue hover:bg-white hover:text-blue">
                <a
                  href="#home"
                  className="no-underline text-white text-lg hover:text-blue"
                >
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
