import React from "react";
import "./Css/FacingInterview.css";
import StudentHeader from "../Header/StudentHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import img from "./Images/interview-pic.jpg";

const FacingInterview = () => {
  return (
    <>
      <StudentHeader />
      <div className="facing-interview-main">
        <Sidebar />
        <div className="facing-interview-container">
          <div>
            <div class="bacon-blog-post bacon-shadow">
              <img src={img} alt="" />
              <div class="bacon-blog-post-inner">
                {/* <h2><a href="" rel="bookmark" class="title-row">Facing Interview with confidence</a></h2> */}
                <p>
                  <h1>
                    1. An impressive resume is more powerful than you think:
                  </h1>
                  Look no further than crafting an impressive resume. Your
                  resume is often the first piece of information that recruiters
                  or clients will see about you, so it's crucial that it
                  highlights your strengths, accomplishments, and relevant
                  experience in a clear and concise way.{" "}
                </p>
                <p>
                  An impressive resume can help you stand out from the
                  competition, showcase your unique skills and qualifications,
                  and demonstrate your professionalism and attention to detail.
                  By presenting your accomplishments in a compelling way, you
                  can increase your chances of landing that dream job or winning
                  over a potential client.
                </p>
                <p>
                  But instead, ask “Who wants to be an engineer and help develop
                  airfoils to help fly in the atmosphere of Mars?” With the
                  latter, you get the best students in the class.
                </p>
                <blockquote>
                  <p>
                    To create an impressive resume, start by identifying your
                    key achievements and skills. Think about what sets you apart
                    from other candidates, and use specific examples to
                    illustrate your strengths. Use clear and concise language,
                    and make sure to tailor your resume to the specific job or
                    client you're applying for.
                  </p>
                  <p>
                    In addition to highlighting your skills and experience, an
                    impressive resume should also be visually appealing and easy
                    to read. Use a clean, modern layout and make sure your fonts
                    and formatting are consistent throughout. Include relevant
                    headings and bullet points to make your information easy to
                    scan, and consider adding visual elements like graphs or
                    charts to showcase your achievements.
                  </p>
                  {/* <p>
                    — Jeff Goins,{" "}
                    <a
                      href="http://amzn.to/28INctw"
                      onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://amzn.to/28INctw', 'The Art of Work']);"
                      target="_blank"
                    >
                      The Art of Work
                    </a>
                  </p> */}
                </blockquote>
                <p>
                  Don't underestimate the power of an impressive resume. By
                  showcasing your strengths and accomplishments in a clear and
                  compelling way, you can set yourself apart from the
                  competition and increase your chances of landing that dream
                  job or winning over that potential client. So take the time to
                  craft a resume that truly reflects your skills and experience,
                  and watch as the opportunities come rolling in.
                </p>
                <p>
                  <h3>Inspiration</h3>
                </p>
                <p>
                  For inspiration, this is one of the reasons that I have side
                  projects. To keep pushing my limits. It allows me to play. To
                  find out how to make user interfaces for VR, tinker with
                  implementing the{" "}
                  <a
                    href="https://www.ampproject.org/"
                    onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.ampproject.org/', 'Acelerated Mobile Pages Project']);"
                    target="_blank"
                  >
                    Acelerated Mobile Pages Project
                  </a>{" "}
                  on content, create a{" "}
                  <a href="http://garybacon.com/snapchat/" target="_blank">
                    landing page for Snapchat
                  </a>
                  , write books, and so much more.
                </p>
              </div>
            </div>
          </div>
          <div className="interview-video grid grid-cols-2">
          <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7TH1upXDyLE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
               <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OLVUrgQ_BbA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
          {/* <div className="more-blogs-section">
            <h1 className="heading"> few more blogs to check out</h1>

            <div class="post-container">
              <Link>
                <div class="post">
                  <p class="date">21 DE DEZEMBRO DE 2022</p>
                  <p></p>
                  <h1>Primeira Publicação do Blog</h1>
                  <div class="post-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat pariatur rem qui nam veniam numquam maiores
                      tempore quas vero, rerum vel? Nemo repellat sapiente nulla
                      eos impedit veniam, natus dolores!
                    </p>
                  </div>
                </div>
              </Link>
              <hr />
              <div class="post">
                <p class="date">22 DE DEZEMBRO DE 2022</p>
                <p></p>
                <h1>Segunda Publicação do Blog</h1>
                <div class="post-content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt repellat doloribus ad laboriosam eveniet modi
                    soluta cumque beatae nobis, consequuntur possimus inventore
                    vitae, deserunt cum fuga ab eius, est nam.
                  </p>
                </div>
              </div>
              <hr />
              <div class="post">
                <p class="date">23 DE DEZEMBRO DE 2022</p>
                <p></p>
                <h1>Terceira Publicação do Blog</h1>
                <div class="post-content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt repellat doloribus ad laboriosam eveniet modi
                    soluta cumque beatae nobis, consequuntur possimus inventore
                    vitae, deserunt cum fuga ab eius, est nam.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FacingInterview;
