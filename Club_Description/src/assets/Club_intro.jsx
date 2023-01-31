import Club_logo from "../Images/Club logo.png";
import Team_1 from "../Images/Team_1.png";
import Team_2 from "../Images/Team_2.png";
import Team_3 from "../Images/Team_3.png";
import Team_4 from "../Images/Team_4.png";
import Team_5 from "../Images/Team_5.png";
import Team_6 from "../Images/Team_6.png";

export default function Club_intro(){

    return(
        <div>
        <h5 className="cd_heading text-orange text-5xl text-center mt-4 mb-8 font-semibold">STUDENT CLUBS</h5>
        <div className="w-48 sm:w-64 md:w-72 lg:w-96 m-auto"><img classname="Logo " src={Club_logo} alt="" /></div>
        <h5 className="text-center pt-8 text-[2.5rem] font-semibold"> AATMANN</h5>
        <p className="text-center text-orange pt-1 text-2xl font-normal">Psycology Club</p>
        <p className="pt-8 p-6 text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>

        <h5 className="p-6 pt-4 text-3xl font-medium">VISION</h5>
        <p className="pr-6 pl-6 pt-4 text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit </p>
        <h5 className="p-8 text-3xl font-medium ">CORE COMMITEE MEMBERS :</h5>

        
        <div className="flex flex-col items-center sm:flex-row sm:pr-8 justify-evenly">

        <div className="m-2 text-center">
        <p className="p-2 text-lg font-medium">President</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_1} alt="President" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        

        
        <div className="m-2 text-center">
        <p className="p-2 text-lg font-medium">Vice President</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_2} alt="Vice President" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        

        
        <div className="m-2 text-center">
        <p className="p-2 text-lg font-medium">Treasurer</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_3} alt="Treasurer" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        </div>
        

        <div className="flex flex-col items-center sm:flex-row sm:pr-8 justify-evenly">
        <div className="m-2 text-center">
        <p className="p-2 text-lg font-medium">Gen-Sec</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_4} alt="Gen-Sec" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        

        
        <div className="m-2 text-center">
        <p className="p-2 text-lg font-medium">Member 1</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_5} alt="Member 1" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        

        
        <div className="m-2 text-center ">
        <p className="p-2 text-lg font-medium">Member 2</p>
        <img className="pl-4 sm:pl-8 md:pl-8 w-44" src={Team_6} alt="Member 2" />
        <p className="p-2 text-lg font-medium">Name</p>
        </div>
        
        </div>
        
    
        </div>
    )
}