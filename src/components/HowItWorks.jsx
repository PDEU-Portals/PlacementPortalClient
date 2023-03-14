import React from 'react'
import Header from './Header/Header';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <>
    <Header />
    <div className='Article'>
      <p className="ArticleTitle"> HOW IT WORKS?</p>
    <div class="card">
  <div class="card-image">
    <img src="BuildYourResume.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 1</h2> */}
    <p>On this portal, you can build your <br /> resume in few steps. Just enlist your qualifications and required details.<br /> It also helps you to know how <br />resume is build and which type of  <br />resume tends to get selected easily.</p>
    <div class="more-content">
      <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="./Interview.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 2</h2> */}
    <p>Students who face problems <br />regarding interviews can resolve this issue through this portal. We have tutorials and refrences to face any interview.</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="JobsAndInternship.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 3</h2> */}
    <p>Job or internship application is way <br />easier through this portal. Just<br /> compare desirable companies <br />through this postal, upload your<br /> resume and then apply. Comapny<br /> will review your resume and contact<br /> you soon. </p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="Stats.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 4</h2> */}
    <p>Students can compare requirments<br /> of the comapny through the statistic details provided here and apply accordingly.</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="Clubs.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 1</h2> */}
    <p>PDEU have several clubs at helps <br /> student to get opportunity to lead <br /> and grow apart from academics</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="Portal.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 2</h2> */}
    <p>Recruiter directly approach the <br />portal and review applicants. So it <br />is easy for students to reach top <br />most companies directly and get to know more about them.</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="Profile.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 3</h2> */}
    <p>Helps your to build strong profile, <br />helps you to outshine your skills. <br />This is an important step if you <br />want to get hired.</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <img src="Test.png"/>
  </div>
  <div class="card-content">
    {/* <h2>Card 4</h2> */}
    <p>Students are required to attend <br /> aptitude test which will help the <br /> recruiter to distinguish the best.</p>
    <div class="more-content">
    <a href="/">For more information...</a>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default HowItWorks