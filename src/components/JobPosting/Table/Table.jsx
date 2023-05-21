import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home'
import { Button,Table } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
                    

const ApplicantsTable = ({id}) => {
  // console.log(tableData);

    const [Employees,setEmployees] = React.useState(null);

    React.useEffect(() => {
      const getJob = async() => {
          const response = await axios.get(`http://localhost:5000/api/v1/recruiter/applicants/${id}`)
          // console.log(response.data)
          setEmployees(response.data)
      }
      getJob()
  },[])


    // if(data){
    //     setEmployees(data)
    // }

    let history = useNavigate();

    //for handling the edit button
    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('id',id);
    }

    //For handling Delete button
    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        //Used for Deleting the Element
        //spice has two arguments jahan se woh start hoga remove krna and second argument is for how many elements you want to delete lets say 1 element you want to delete then write one
        Employees.splice(index,1);

        history('/');
      }
      
      const handleApproval = async() => {
        const response = await axios.post(`${process.env.REACT_APP_URI}/recruiter/addSelectedApplicant`,{
          userId: localStorage.getItem('studentId'),
          jobId: id
        })
        // console.log(response.data);
        if(response.status == 200){
          window.location.reload()
        }
      }

      const handleReject = async() => {
        // const response = await axios.post(`${process.env.REACT_APP_URI}/recruiter/`)
      }
      
  return (
    <>
        <div className = 'Job-table' style={{margin : "5rem", border:"1px solid white",borderRadius:"1px !important"}}>
            <Table striped  border={Button} hover size = "lg">
                <thead>
                    <tr className='Head-Row'>
                        <th>
                            Sr No.
                        </th>
                        {/* <th>
                            Date
                        </th> */}
                        <th>
                            Name
                        </th>
                        <th>
                            Skills
                        </th>
                        <th>
                            Branch
                        </th>
                        <th>
                            Resume
                        </th>
                        <th>
                            Approval
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item,index) => {
                            return(
                                <tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    
                                    {/* <td>
                                        {item.Date}
                                    </td> */}
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.skills.map(skill => skill+' ')}
                                    </td>
                                    <td>
                                        {item.branch}
                                    </td>
                                    <td>
                                        <a href={item.resume.secure_url} target='_blank' className='underline text-blue-500'>resume</a>
                                    </td>
                                    
                                    <td >

                                        <button type="" className='Approve-btn' onClick={handleApproval}>Approve</button>
                                        &nbsp;
                                        <button type="" className='Reject-btn' onClick={handleReject}>Reject</button>


                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data Available"
                    }
                </tbody>
            </Table>
            <br />
            
        </div>
    </>
  )
}

export default ApplicantsTable