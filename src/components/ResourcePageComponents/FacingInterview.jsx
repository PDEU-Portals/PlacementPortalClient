import React from "react";
import './Css/FacingInterview.css';
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import img from './Images/interview-pic.jpg';

const FacingInterview = () => {
    return ( 
        <>  
            <Header />
            <div className="facing-interview-main">
                <Sidebar />
                <div className="facing-interview-container">
                    <div>
  <div class="bacon-blog-post bacon-shadow">
    <img src={img} alt="" />
    <div class="bacon-blog-post-inner">
      <h2><a href="http://garybacon.com/post/finding-what-challenges-you/" rel="bookmark" title="Permanent link to Finding What Challenges You" class="title-row">Facing Interview with confidence</a></h2>
      <p>In an <a href="https://www.youtube.com/watch?v=eaVBDPAy-SI" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.youtube.com/watch?v=eaVBDPAy-SI', 'interview']);" target="_blank">interview</a>, Neil deGrasse Tyson talks about science
        boosting the economy. He goes on to say, most companies and politicians don’t have the tolerance for the long term view.</p>
      <p>You don’t motivate a group of kids, saying “Who wants to be a mechanical engineer and help improve flight efficiency by 15% compared to the airplane your father flew?”</p>
      <p>But instead, ask “Who wants to be an engineer and help develop airfoils to help fly in the atmosphere of Mars?” With the latter, you get the best students in the class.</p>
      <blockquote>
        <p>Flow is the intersection of what you are good at and what challenges you— where difficulty and competency meet.</p>
        <p>When your competency exceeds the difficulty of a task, you are bored. And when the difficulty exceeds your competency, you are anxious. That was my problem: I was bored.</p>
        <p>— Jeff Goins, <a href="http://amzn.to/28INctw" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://amzn.to/28INctw', 'The Art of Work']);" target="_blank">The Art of Work</a></p>
      </blockquote>
      <p>There are times where the day job requires me to do the mundane. That’s fine. We can’t always have constant excitement. It’s called work for a reason.</p>
      <p><h3>Inspiration</h3></p>
      <p>For inspiration, this is one of the reasons that I have side projects. To keep pushing my limits. It allows me to play. To find out how to make user interfaces for VR, tinker with implementing the <a href="https://www.ampproject.org/" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.ampproject.org/', 'Acelerated Mobile Pages Project']);" target="_blank">Acelerated Mobile Pages Project</a> on content, create a <a href="http://garybacon.com/snapchat/" target="_blank">landing page for Snapchat</a>, write books, and so much more.</p>
    </div>
  </div>
</div>
<div className="more-blogs-section">
    <h1 className="heading"> few more blogs to check out</h1>
    
    <div class="post-container">
    <Link>
    
      <div class="post">
        <p class="date">21 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Primeira Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!</p> 
        </div>
      </div>
      </Link>
      <hr />
      <div class="post">
        <p class="date">22 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Segunda Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus ad laboriosam eveniet modi soluta cumque beatae nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab eius, est nam.</p>
        </div>
      </div>
      <hr />
      <div class="post">
        <p class="date">23 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Terceira Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus ad laboriosam eveniet modi soluta cumque beatae nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab eius, est nam.</p>
        </div>
      </div>        
    </div>
</div>
                </div>
            </div>
        </>
     );
}
 
export default FacingInterview;