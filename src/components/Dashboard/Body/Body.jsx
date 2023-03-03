import React from "react";
import styles from "./Body.module.css";
import home from "../assets/home.png"
import job from "../assets/job.png"
import placement from "../assets/placement.png"
import student from "../assets/student.png"
import resume from "../assets/resume.png"
import research from "../assets/research.png"


function  Body() {
    return (
      <div className={styles.container}>
        <div className="main_image">
            <img src={home} alt="home" />
        </div>

        <div className={styles.jobboarding}>
          <span className={styles.header1}>Job Boarding Page</span>
          <span className={styles.textbox1}>Looking for a job right after your graduation? Dont worry, we have got it all covered. With the job boarding facilities available on our portal, job seekers and employers get to have a convenient way to contact each other online. Thus, the process of searching for a job gets simpler. Here, there are many jobs to choose from, with the spectrum ranging from general to specific industries.
          In todays era, the corporate world is ever changing, with old industries being phased out or bought by new ones or their own competitors. Along with this, new industries are bringing up more opportunities. The portal has reviewed hundreds of jobs to provide you with that one job, which would cater to all of your interests and requirements. So, click on the button below to start your journey, RIGHT NOW!! </span>
          
          <a href="/students/resource/jobboarding">
            <button className={styles.button1}>Kick Start Your Career</button>
          </a>  
          
          <img src={job} alt="rightimage" className={styles.job}/>
        </div>


        <div className={styles.placementstatistics}>
          <span className={styles.header2}>Placement Statistics</span>
          <span className={styles.textbox2}>Our portal also presents it’s users with the placement statistics obtained from the previously collected student data. This give the user an insight into the effectiveness of the portal. A user can also have an idea of the extent up to which the portal can be useful to them in their own required way.

The statistics here have been presented in the most convenient way possible. You are just one click away from what you seek.
</span>   
          <a href="/students/placement_stats">
            <button className={styles.button2}>Get Analytics Now !!</button>
          </a>
          <img src={placement} alt="leftimage"className={styles.placement}/>
        </div>

        <div className={styles.studentrelations}>
          <span className={styles.header3}>Student Relations</span>
          <span className={styles.textbox3}>As a new student, what does one seek, apart from quality education, at a particular institution? They seek to be provided with an environment comfortable enough for them to be able to build their skills. Students are one of the biggest defining parameters of this environment. Thus, it is here that the term “Student Relations” steps in to give a student an idea about the learning environment provided at the campus.

Student relations can be described in many ways, the most effective ones being the presence of clubs and committees at the campus. Talking about this, PDEU is known for having a wide range of such clubs and committees for a student to choose from. Each club is based around a common theme, which helps a student to pursue their own interest in extra-curricular fields.

Even after a student has graduated, their contact is maintained by the means of external platforms, like LinkedIn. In a nutshell, the campus provides it’s students with an environment where they can bond with their colleagues and work towards achieving their skills.</span>
          
          <a href="/students/community">
            <button className={styles.button3} >Manage Student Relations</button>
          </a> 
          <img src={student} alt="rightimage" className={styles.student}/>
        </div>

        <div className={styles.buildresume}>
            <span className={styles.header4}>Build your Resume</span>
          <span className={styles.textbox4}>What is a resume, and why is it so important? It’s merely a piece of paper, but a piece wherein all the information about a candidate, including their education, qualification and other achievements, is penned down. Thus, a resume becomes a very important tool for a student if he/she is willing to apply for a job or further courses. A good resume can have a large impact on your chance of achieving the above mentioned goals.

            But how should one write their resume in the correct way? This portal has got it all covered. It provides the users with guidelines on how to build a good resume so that they can present themselves in an appropriate manner, whenever they go for a particular interview.

            Some of the references that we will be covering are:
            Mentors
            Supervisors
            Directors or Deans of the institute
            Advisors
            Colleagues or Project partners
            Along with this, a proper pathway wil be provided to students to build a perfect resume they desire for.</span>
            <a href="/students/resume_bulider">
              <button className={styles.button4}>Manage it Now !!</button>
            </a>
          <img src={resume} alt="leftimage" className={styles.resume}/>
        </div>

        

        <div className={styles.researchproposal}>
          <span className={styles.header5}>Technical Test</span>
          <span className={styles.textbox5}>Research Proposals are a must for people who are attempting to finish their PhD course and are very helpful for students who are willing to apply to a university for further studies. In a nutshell, a research proposal can be characterized as something that:
              Provides evidence of the expertise required to support one’s area of research.
              Forms an integral part of the assessment of a particular application.
              To make sure that a student’s research proposal adopts the above mentioned characteristics properly, it is necessary for the students to achieve proper guidance. Guidance is given in terms of how long the proposal should be and what all should it contain. The user does not need to worry, as this portal takes care of all the instructions and guidelines required to create a perfect research proposal. Along with this, students at PDEU can work under the leadership of various faculties present and take part in a wide range of research-based activities. 
              Click on the button given here to start working on your own Research Proposal, right now!!</span>
              <a href="/students/technical_test_login">
                <button className={styles.button5}>Technical Tests</button>
              </a>
          <img src={research} alt="rightimage" className={styles.research}/>
        </div>

      </div>
    );
  }

  export default Body;