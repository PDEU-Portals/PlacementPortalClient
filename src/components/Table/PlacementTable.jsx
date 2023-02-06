import { useState } from "react";
import "./Table.css";


const singleData={Name:"Note Keeping with Sharing",Stack:"React, Express, SQL",Faculty:"Faculty xyzlorem"};
  const data=[singleData,singleData,singleData,singleData];//Assuming this is the data recieved from database
  const slicedData=data.slice(0,3);
function CreateTable() {
  const [showAll,setShowAll]=useState(false);
  const handleShowAll=()=>{
    showAll?setShowAll(false):setShowAll(true);
  }
  return (<div className="projectTableWrapper" style={{}}>
  <div style={{display:"float"}}>
      <p style={{float:"left"}}>Your Projects</p>
      <p style={{float:"right",paddingLeft:"2rem"}}>+ New Project</p>
      <p style={{float:"right"}}>Icon</p>
      </div>
      <br />
    <table >
      <thead>
        <tr style={{fontWeight:"400"}}>
          <th >Sr No.</th>
          <th >Project Name</th>
          <th>Tech Stack Used</th>
          <th>Faculty Mentor</th>
        </tr>
      </thead>
      <tbody>
      {(showAll?data:slicedData).map((row,index)=>{// mapping the data depending on the state of showAll.
    return(<tr>
      <td>{index+1}</td>
      <td style={{color:"#092366",fontWeight:"500"}}>{row.Name}</td>
      <td>{row.Stack}</td>
      <td>{row.Faculty}</td>
    </tr>)
  })}
      </tbody>
    </table>
    <div style={{textAlign:"center",margin:"1rem 0"}}>
    <button onClick={handleShowAll} >See All {data.length} projects</button>

    </div>
    </div>
  );
}

export default CreateTable;