import React from "react";
import Error_404 from "./Error_404.png";

export default function Error(){
return(
    <>
    <center>
    <img src={Error_404} className="mt-10 w-[90%]"/>
    
    <div className="flex flex-col m-10">
    <div>
    <h5 className="text-center font-semibold text-2xl">Page Not Found</h5>
    </div>
    <div>
    <p className="text-center font-semibold text-xl mt-5">It seems like we can't find page you are looking for.</p>
    </div>
    <div>
    <button type="button" className="text-center mt-5 font-semibold p-4 text-white bg-black hover:text-black hover:bg-gray-500 min-[340px]:w-[50%] w-80 text-xl rounded-lg"><a href="/">Go Back To Home ➡️</a></button>
    </div>
    </div>
    </center>
    </>
 );
};