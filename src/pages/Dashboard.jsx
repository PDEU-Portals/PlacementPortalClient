import React from 'react'
import firstimage from '../images/dashboard images/image 13.png'
import secondimage from '../images/dashboard images/image 48.png'
import thirdimage from '../images/dashboard images/image 49.png'
import fourthimage from '../images/dashboard images/image 5.png'
import fifthimage from '../images/dashboard images/image 6.png'
import sixthimage from '../images/dashboard images/image 50.png'
import seventhimage from '../images/dashboard images/image 51.png'
import eightimage from '../images/dashboard images/image 54.png'
import ninthimage from '../images/dashboard images/image 52.png'
import tenthimage from '../images/dashboard images/image 55.png'
import StudentHeader from '../components/Header/StudentHeader.jsx';

const Main = () => {
    return (
        <>
          <StudentHeader />
             <div className=""><img className='h-96 w-full' src={firstimage} alt="" /></div>

             <div className="bg-[#1F3368] pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">JOB LANDING PAGE</h1>
            <div className='mx-8 flex sm:flex-col'><div className='flex flex-col sm:pb-4'><p className="font-bold px-2 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam cupiditate officiis in totam obcaecati, tempore repudiandae dolorum quibusdam, repellendus esse necessitatibus animi repellat amet alias voluptatem sint nostrum optio explicabo nam facilis, corrupti quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eveniet quos impedit animi assumenda omnis at laboriosam ut, dolores consequuntur deserunt doloremque, perspiciatis, incidunt labore? Facere odit alias hic illum obcaecati maxime explicabo nemo.</p><button type="button" className="text-white bg-[#F68C1F] hover:bg-white hover:text-[#F68C1F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto " >
              <a href="/students/jobboarding">
              Kick Start Your Carrer
              </a>
              </button></div><img className='h-96' src={secondimage} alt="" /></div>
            </div>

             <div className="pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Placement Statistics</h1>
            <div className='mx-8 flex sm:flex-col'><img className='h-96 ' src={thirdimage} alt="" /><div className='flex flex-col sm:pb-4'><p className="font-bold px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, quibusdam saepe iste vel deleniti id? Commodi tempore quia in porro, similique magnam minima soluta eos voluptatem aliquid iure obcaecati maxime quam aspernatur nam explicabo.</p><button type="button" className="text-white bg-[#1F3368] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto ">
              <a href="/students/placementstats">
              Get Analytics Now!
              </a>
            </button></div></div>
            </div>

            <div className='bg-[#1F3368] pb-4'>
                <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Student Relation</h1>
            <div className='mx-8 flex sm:flex-col'><div className='flex flex-col sm:pb-4'><p className="font-bold text-white px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, animi similique omnis ratione consequuntur perferendis! Praesentium totam voluptas eum! Facere impedit veritatis natus officia quae quas aperiam recusandae commodi, atque quasi assumenda sapiente.</p><button type="button" className="text-white bg-[#F68C1F] hover:bg-white hover:text-[#F68C1F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto ">
              <a href="/student/experiencesharing">
                Manage Student Relation
              </a>
              </button></div><img className='h-96 ' src={fourthimage} alt="" /></div>
            </div>

             <div className="pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Build Your Resume</h1>
            <div className='mx-8 flex sm:flex-col'><img className='h-96 ' src={fifthimage} alt="" /><div className='flex flex-col sm:pb-4'><p className="font-bold px-2">What is a resume, and why is it so important? It’s merely a piece of paper, but a piece wherein all the information about a candidate, including their education, qualification and other achievements, is penned down. Thus, a resume becomes a very important tool for a student if he/she is willing to apply for a job or further courses. A good resume can have a large impact on your chance of achieving the above mentioned goals.

But how should one write their resume in the correct way? This portal has got it all covered. It provides the users with guidelines on how to build a good resume so that they can present themselves in an appropriate manner, whenever they go for a particular interview.

Some of the references that we will be covering are:
Mentors
Supervisors
Directors or Deans of the institute
Advisors
Colleagues or Project partners
Along with this, a proper pathway wil be provided to students to build a perfect resume they desire for.
</p><button type="button" className="text-white bg-[#1F3368] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">
  <a href="/students/resumebuilder">
    Manage It Now!
  </a>
  </button></div></div>
            </div>

             <div className=" bg-[#1F3368] pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Research Proposal</h1>
            <div className='mx-8 flex sm:flex-col'><div className='flex flex-col sm:pb-4'><p className='font-bold px-2 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolore facilis minus saepe eaque tenetur numquam illum deleniti aliquam? Quo, quas adipisci, excepturi ipsa odit sequi a quos officia iste optio et quis? Impedit.</p><button type="button" className="text-white bg-[#F68C1F] hover:bg-white hover:text-[#F68C1F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">Coming Soon</button></div><img className='h-96 ' src={sixthimage} alt="" /></div>
            </div>
            
            <div className=' pb-4'>
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Experience Sharing Forum</h1>
            <div className='mx-8 flex sm:flex-col'><img className='h-96 ' src={seventhimage} alt="" /><div className='flex flex-col sm:pb-4'><p className="font-bold  px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse officiis aperiam hic eos doloremque fugit nulla ex repellendus, soluta nobis provident dolores, ad quasi fugiat repellat deserunt error corrupti ab rem. Fugit, possimus?</p><button type="button" className="text-white bg-[#1F3368] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">
              <a href="/student/experiencesharing">Go to Forum</a>
              </button></div></div>
            </div>
{/* 
             <div className="bg-[#1F3368] pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Technical Test</h1>
            <div className='mx-8 flex sm:flex-col'><div className='flex flex-col sm:pb-4'><p className="font-bold px-2 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit animi magni inventore, doloribus aspernatur nostrum minima, iste voluptatem quae dolorem, fugiat dignissimos dicta molestiae nihil quas. Ut vel quam ea explicabo excepturi in.</p><button type="button" className="text-white bg-[#F68C1F] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">Test Your Skill</button></div><img className='h-96 ' src={eightimage} alt="" /></div>
            </div> */}

             <div className="   bg-[#1F3368] pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Aptitude Test</h1>
            <div className='mx-8 flex sm:flex-col'><img className='h-96 ' src={ninthimage} alt="" /><div className='flex flex-col sm:pb-4'><p className="font-bold  px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor ipsam quas nesciunt nam saepe, eius possimus enim vitae praesentium, magnam dolore temporibus excepturi tempora sunt ipsum porro quae officia quidem, quis deserunt voluptas!</p><button type="button" className="text-white bg-[#F68C1F] hover:bg-white hover:text-[#F68C1F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">Check Your Aptitude</button></div></div>
            </div>

             <div className="pb-4">
            <h1 className="mx-8 font-bold py-2 px-0 text-[#F68C1F] text-left text-2xl">Facing The Interview</h1>
            <div className='mx-8 flex sm:flex-col'><div className='flex flex-col sm:pb-4 '><p className="font-bold px-2 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque sed, enim eum id similique odit accusantium quos, perferendis aspernatur nobis animi cum vitae at incidunt illo quae sint! Omnis ratione quidem veniam dolorum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ipsum repudiandae, ducimus officia id omnis quisquam ut at, in doloremque quae nostrum iusto doloribus! Cumque commodi ea, error iure eum nihil eos ipsam eius.</p><button type="button" className="text-white bg-[#1F3368] hover:bg-white hover:text-[#1F3368] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-auto  ">
              <a href="/students/resource/process">
              Guide to Placement
              </a></button></div><img className='h-96 ' src={tenthimage} alt="" /></div>
            </div>

            <h1>Footer</h1>
        </>
    )
}

export default Main;