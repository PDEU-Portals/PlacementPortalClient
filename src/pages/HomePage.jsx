import React from "react";
import "./Card_Trial.css";
import {Link} from 'react-router-dom'
import InfoPage from "../components/HomePage/InfoPage"
import PortalInfo from "../components/HomePage/PortalInfo"
import Footer from "../components/Footer"
import Article from "../components/HomePage/Article"
import Header from "../components/Header/Header";

export default function Hero() {
  return (
    <>
    <Header />
      <div className="flex justify-center pt-20 h-[60rem] bg-[url('./images/Homepage_bg.png')]  bg-no-repeat bg-cover font-Poppins">
        <div className="ml-24 m-0 p-0">
          <h2 className="text-orange-500 mr-8 text-[4rem] font-medium">
            PLACEMENT PORTAL
            <br />
            <span className="text-blue-900 text-[6rem]">PDEU</span>
          </h2>{" "}
        </div>
      </div>

      <div className=" hero-title flex font-bold mt-10 items-center justify-center text-6xl text-slate-600">Portal Login</div>
      <div className="Login-Cards grid grid-cols-3 ">
        <div class="login-card">
          <img
            className="login-card-img"
            src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=1060&t=st=1678282391~exp=1678282991~hmac=5e5875a8da6b26e4df6f763d37f0d5fbd7c96e7a91180f8ace2fab53ce2285fb"
            alt="Lago di Braies"
          />

          <div className="card__details">
            <span className="tag">PDEU</span>
            <span className="tag">STUDENT</span>
            <div className="name">Student Login</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum
              odio.
            </p>
            <Link to='/students/studentform' ><button className="Read-btn">Login</button></Link>

          </div>
        </div>

        <div className="login-card">
          <img
            className="login-card-img"
            src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5423.jpg?w=1060&t=st=1678282493~exp=1678283093~hmac=36c01b5a644944ba1efd015dc1b4c101440a204f6954afda036512fc1235e8e2"
            alt="Lago di Braies"
          />
          <div className="card__details">
            <span className="tag">PDEU</span>
            <span className="tag">Lake</span>
            <div className="name">Recruiter Login</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum
              odio.
            </p>
            <Link to='/students/recruiterform' ><button className="Read-btn">Login</button></Link>
          </div>
        </div>

        <div class="login-card">
          <img
            className="login-card-img"
            src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=1060&t=st=1678282519~exp=1678283119~hmac=dd241ffdd7e419109663cf17db806bee7c601098f068764d319aa8ed718fb89a"
            alt="Lago di Braies"
          />
          <div class="card__details">
            <span class="tag">PDEU</span>
            <span class="tag">Lake</span>
            <div class="name">Admin Login</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum
              odio.
            </p>
            <Link to='/admin/adminlogin' ><button className="Read-btn">Login</button></Link>

          </div>
        </div>
      </div>
      <InfoPage />
        <Article />
        <PortalInfo />
        <Footer />
    </>
  );
}
