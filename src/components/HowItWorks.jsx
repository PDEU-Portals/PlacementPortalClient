import React from "react";
import Header from "./Header/Header";
import "./HowItWorks.css";
import Resume from "./BuildYourResume.png";
import interview from "./Interview.png";
import JobsAndInternship from "./JobsAndInternship.png";
import Portal from "./Portal.png";
import Profile from "./Profile.png";
import Stats from "./Stats.png";
import Test from "./Test.png";
import Clubs from "./Clubs.png";

function HowItWorks() {
  return (
    <>
      <Header />

      <div className="Article">
        <p className="ArticleTitle mt-10 "> HOW IT WORKS?</p>
        <div className="flex ml-16 mt-20 mb-20  flex-wrap grid grid-cols-4 justify-center">
          <div className="Work-Card ">
            <div class="Work-Card-image">
              <img src={Resume} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 1</h2> */}
              <p className="text-slate-300	">
                On this portal, you can build your <br /> resume in few steps.
                Just enlist your qualifications and required details.
                <br /> It also helps you to know how <br />
                resume is build and which type of <br />
                resume tends to get selected easily.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Interview.png"/> */}
              <img src={interview} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 2</h2> */}
              <p className="text-slate-300">
                Students who face problems <br />
                regarding interviews can resolve this issue through this portal.
                We have tutorials and refrences to face any interview.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="JobsAndInternship.png"/> */}
              <img src={JobsAndInternship} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 3</h2> */}
              <p className="text-slate-300">
                Job or internship application is way <br />
                easier through this portal. Just
                <br /> compare desirable companies <br />
                through this postal, upload your
                <br /> resume and then apply. Comapny
                <br /> will review your resume and contact
                <br /> you soon.{" "}
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Stats.png" alt="" /> */}
              <img src={Stats} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 4</h2> */}
              <p className="text-slate-300">
                Students can compare requirments
                <br /> of the comapny through the statistic details provided
                here and apply accordingly.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Clubs.png"/> */}
              <img src={Clubs} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 1</h2> */}
              <p className="text-slate-300">
                PDEU have several clubs at helps <br /> student to get
                opportunity to lead <br /> and grow apart from academics
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Portal.png"/> */}
              <img src={Portal} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 2</h2> */}
              <p className="text-slate-300">
                Recruiter directly approach the <br />
                portal and review applicants. So it <br />
                is easy for students to reach top <br />
                most companies directly and get to know more about them.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Profile.png"/> */}
              <img src={Profile} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 3</h2> */}
              <p className="text-slate-300">
                Helps your to build strong profile, <br />
                helps you to outshine your skills. <br />
                This is an important step if you <br />
                want to get hired.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>

          <div class="Work-Card">
            <div class="Work-Card-image">
              {/* <img src="Test.png"/> */}
              <img src={Test} />
            </div>
            <div class="Work-Card-content">
              {/* <h2>Work-Card 4</h2> */}
              <p className="text-slate-300">
                Students are required to attend <br /> aptitude test which will
                help the <br /> recruiter to distinguish the best.
              </p>
              <div class="more-content">
                <a href="/">For more information...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
