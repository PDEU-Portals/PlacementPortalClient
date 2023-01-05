import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="Footer flex h-[220px] w-full font-Poppins">
        <div className="Footer_Container1 w-[33.5%] h-full bg-[#F68C1F] opacity-100 bg-[url('./images/Pdeu_transparent_logo.png')] bg-no-repeat bg-center bg-[length:318px_93px]"></div>

        <div className="Footer_Container2 w-[66.5%] h-full bg-blue-900 opacity-80 bg-[url('./images/footer_img.png')] bg-no-repeat bg-center bg-[length:100%_100%]">
          <div className="Footer_heading pl-[54px]">
            
              <h4 className="m-0 p-0 text-white text-2xl pl-4 pt-4  font-medium">
                Quick Links
              </h4>
            
          </div>
          <div className="footer_links flex  content-center">
            <div className="Footer_links1">
              <ul className="p-0 m-0 font-medium pl-16">
                <li className="nav__item p-[10px] ">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Research
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Naac 
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                   ORSP
                  </a>
                </li>
              </ul>
            </div>

            <div className="Footer_links2 m-0 p-0">
              <ul className="p-0 m-0 font-medium pl-96">
                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    SOT
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    About Us 
                  </a>
                </li>

                <li className="nav__item p-[10px]">
                  <a
                    href="#home"
                    className="text-white text-lg no-underline hover:text-orange"
                  >
                    Contact Us
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
