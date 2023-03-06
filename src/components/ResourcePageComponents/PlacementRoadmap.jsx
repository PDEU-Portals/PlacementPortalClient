import React from "react";
import Header from "../Header/Header";
import "./Css/PlacementRoadmap.css";
import Sidebar from "./Sidebar";

const PlacementRoadmap = () => {
  return (
    <>
      <Header />
      <div className="main-cotainer">
        <Sidebar />
        <div className="roadmap-container">
          <h1> Placement Process</h1>

          <div class="roadmap-inner-container">
            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>First Year</span>
                <h3>Pre – Placement Talk</h3>
                <p>
                  There is a pre-placement talk with the students provided by
                  the specific company. It is mainly in the form of
                  presentation. The presentation includes the company profile,
                  selection procedure, organizational achievements, company’s
                  vision and mission. It also includes the growth of the
                  candidate within the company and other benefits, if selected.
                  At the end of the presentation, a candidate can ask question
                  about any doubt.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>Seconed Year</span>
                <h3>Educational Qualification</h3>
                <p>
                  A number of companies place importance on the academic
                  performance of the candidate, and place requirements for
                  minimum marks. Basically, companies go for professional
                  courses such as B.Tech /MCA/MBA/M.Tech for recruiting
                  candidates. Qualification criteria may include grade range,
                  and certified courses.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>Third Year</span>
                <h3>Written Test</h3>
                <p>
                  Most of the companies conduct a written test based on the
                  minimum academic performance criterion. This is generally an
                  aptitude test which has questions on Mathematics, English &
                  Reasoning. Some companies also have technical questions in the
                  test. Many companies also started taking coding and written
                  ability test. After written test, the companies conduct
                  interview round for those candidates who qualify the written
                  test. Interview round may have combined or separate HR &
                  technical interviews. Few companies in addition to this also
                  conduct personality or psychometric test.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>Fourth Year</span>
                <h3>Group Discussion</h3>
                <p>
                  Some companies also conduct GD as an elimination round or in
                  addition to interview. In this section, a general topic is
                  placed for a formal discussion. The main objective of this
                  round is to check the communication skills, listening ability,
                  etiquette of a candidate, leadership qualities, convincing
                  power, and knowledge of a candidate. The discussion can be
                  like on Case studies, Abstract topic, and topic from the
                  latest news.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>Fifth Year</span>
                <h3>HR Interview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <span>Fifth Year</span>
                <h3>HR Interview/ Formal Interview</h3>
                <p>
                Formal interview is considered as the final round of the
                  selection procedure. The interview reflects the overall
                  personality of the candidate. The more updated knowledge of
                  the candidate more will be the chances of selection. It
                  includes the internship, work experience, industrial visit to
                  the brands in a specific sector which increase the chances of
                  selection. Basically, it evaluates the stability and
                  confidence level of the candidate.
                </p>
              </div>
            </div>
            </div>

          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Fifth Year</h3>
              <h3>Post – Placement Talk</h3>
              <p>
                After the selection of the candidate, the offer letter will be
                given. The company executive tells about the guidelines related
                to joining process and about the company’s policies. Generally,
                the typical Campus Recruitment process can be identified in the
                following image: The number of students is finally selected by
                the company depends on two major parameters: The number of
                students that are able to match the minimum basic requirements
                of the company set for each of the above stages. The
                organizational requirements in terms of the people required for
                the coming fiscal year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementRoadmap;
