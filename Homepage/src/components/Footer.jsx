import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="Footer flex h-[220px] w-full font-Poppins">
        <div className="Footer_Container1 w-[33.5%] h-full bg-orange opacity-80 bg-[url('./images/Pdeu_transparent_logo.png')] bg-no-repeat bg-center bg-[length:318px_93px]"></div>

        <div className="Footer_Container2 w-[66.5%] h-full bg-blue opacity-80 bg-[url('./images/footer_img.png')] bg-no-repeat bg-center bg-[length:100%_100%]">
          <div className="Footer_heading">
            <center>
              <h4 className="m-0 p-0 text-white text-2xl pl-4 pt-4  font-medium">
                Quick Links
              </h4>
            </center>
          </div>
          <div className="footer_links flex justify-evenly content-center">
            <div className="Footer_links1">
              <ul className="p-0 m-0 font-medium">
                <li className="nav__item p-[10px] ">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="Footer_links2 m-0 p-0">
              <ul>
                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
