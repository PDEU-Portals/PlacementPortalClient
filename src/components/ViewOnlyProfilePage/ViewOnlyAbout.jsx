import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewOnlyAbout = ({sbout}) => {
  
    return ( 
        <>
             <div className="bg-gray-200 rounded-3xl" style={{ margin: '3em', padding: '2em' }}>
      <div className='flex justify-between'>
        <h2 className="mx-8 font-bold py-2 px-0 inline-block" style={{ fontSize: "1.5em" }}>About</h2>
      </div>
      <p className="mx-8 mb-2" style={{ fontSize: "1.2rem" }}>
        {sbout}
      </p>
    </div>
        </>
     );
}
 
export default ViewOnlyAbout;