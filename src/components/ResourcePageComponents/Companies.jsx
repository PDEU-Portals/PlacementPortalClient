import React from "react";
import Header from "../Header/Header";
import Sidebar from './Sidebar.jsx';
import './Css/Company.css';
import img from './Images/interview_pic.jpg';

const Companies = () => {
    return ( 
        <>
        <Header />
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
    <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" >
      <div >
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
    </div>
  </div>
  <div class="card-grid-space">
    <a class="card" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/" >
      <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <a class="card" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" >
      <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
</section>




            </div>
        </div>
        </>
     );
}
 
export default Companies;