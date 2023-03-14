import React from "react";
import StudentHeader from "../Header/StudentHeader";
import Sidebar from "./Sidebar.jsx";
import "./Css/Company.css";
// import img from './Images/company_building.jpg';

const Companies = () => {
  return (
    <>
      <StudentHeader />
      <div className="companies-container">
        <Sidebar />
        <div className="companies-container-div">
          <h1> Here are list of comapnies, which acitvely hires</h1>

          {/* <div class="row">
   <div class="col-lg-4 col-md-6 col-sm-12">
     <div class="blog_card">
    <div class="blog_card_image">
    </div>
    <div class="blog_card_content">
       <h3>Here Comes The Blog Title.</h3> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.</p>
      <a href=""><h6>Visit Company site</h6></a>
    </div>
  </div>  </div> </div> */}

          <section class="cards-wrapper">
            <div class="card-grid-space">
              <div className="img-container">
                <a class="card" href="https://careers.google.com/jobs/results/">
                  <div>
                    <h1>Google</h1>
                    <p>
                      Google LLC is an American multinational technology company
                      focusing on online advertising, search engine technology,
                      artificial intelligence, and consumer electronics.
                    </p>
                    <div class="tags">
                      <div class="tag"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="card-grid-space">
              <a class="card" href="https://careers.microsoft.com/us/en">
                <div>
                  <h1>Microsoft</h1>
                  <p>
                    Microsoft Corporation is an American multinational
                    technology corporation headquartered in Redmond, Washington,
                    United States.
                  </p>
                  <div class="tags">
                    <div class="tag"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="card-grid-space">
              <a class="card" href="https://www.ibm.com/careers/in-en/search/">
                <div>
                  <h1>IBM</h1>
                  <p>
                    The International Business Machines Corporation, nicknamed
                    Big Blue, is an American multinational technology
                    corporation headquartered in Armonk, New York and present in
                    over 175 countries.
                  </p>
                  <div class="tags">
                    <div class="tag"></div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Companies;
