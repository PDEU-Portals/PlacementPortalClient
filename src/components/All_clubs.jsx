import React from "react";
import Sail_logo from "../images/SAIL_img.png";
import club_img from "../images/Highlight-Surface-Pro.png";
import Header from "./Header/Header";

export default function All_clubs() {
    return(
        <>
        <Header />
        <div className="font-Roboto">
            
            
            <img className="w-32 sm:w-40 pt-2 min-[490px]:pt-4 h-auto m-auto" src={Sail_logo} alt="SAIL Logo" width="100" height="100"></img>
            <h5 className="text-orange text-3xl text-center p-4 font-medium sm:text-5xl sm:p-6">STUDENT CLUBS</h5>
            <div className="club_cards_parent flex justify-evenly pt-2 sm:pt-4">
                <div className="club_card max-[450px]:w-28 max-[450px]:h-28  max-[480px]:w-36 max-[480px]:h-36
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <a href="/students/club">
                        <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                        <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                        <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                    </a>
                </div>   

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28  max-[480px]:w-36 max-[480px]:h-36 
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28  max-[480px]:w-36 max-[480px]:h-36
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>
            </div>

            <div className="club_cards_parent flex justify-evenly pt-2 sm:pt-4 md:pt-6">
                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 
                 max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg" src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden  text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>   

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28
                max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 max-[480px]:w-36 max-[480px]:h-36
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>
            </div>

            <div className="club_cards_parent flex justify-evenly pt-2 sm:pt-4 md:pt-6">
                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 
                 max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg" src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden  text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>   

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28
                max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 max-[480px]:w-36 max-[480px]:h-36
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>
            </div>
            
            <div className="club_cards_parent flex justify-evenly pt-2 sm:pt-4 md:pt-6 pb-4">
                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 
                 max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg" src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden  text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>   

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28
                max-[480px]:w-36 max-[480px]:h-36 max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>

                <div className="club_card max-[450px]:w-28 max-[450px]:h-28 max-[480px]:w-36 max-[480px]:h-36
                  max-[550px]:w-40 max-[550px]:h-40 max-[590px]:w-44 max-[590px]:h-44 max-[640px]:w-48 max-[640px]:h-48 sm:w-52 sm:h-52 bg-white rounded-lg">
                    <img className="club_img pt-2 pr-2 pl-2 rounded-lg " src={club_img} alt="Club Image" ></img>
                    <h5 className="text-orange text-center pt-2 max-[550px]:text-lg max-[640px]:text-2xl sm:text-3xl font-medium">Aatmann</h5>
                    <p className="max-[480px]:hidden text-center text font-medium sm:text-lg pb-2">Pyschology club</p>
                </div>  
            </div>

        </div>   
        </>
    )
}
