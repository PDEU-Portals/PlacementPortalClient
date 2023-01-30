import React, { Fragment } from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css"


function Home() {

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

        
  return (
    <Fragment>
        <div className = 'Job-table' style={{margin : "5rem", border:"1px solid white",borderRadius:"1px !important"}}>
            <Table striped  border={Button} hover size = "lg">
                <thead>
                    <tr className='Head-Row'>
                        <th>
                            Sr No.
                        </th>
                        <th>
                            Date
                        </th>
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
                        Employees.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Sr_no}
                                    </td>
                                    
                                    <td>
                                        {item.Date}
                                    </td>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Skills}
                                    </td>
                                    <td>
                                        {item.Branch}
                                    </td>
                                    <td>
                                        {item.Resume}
                                    </td>
                                    
                                    <td >

                                        <button type="" className='Approve-btn'>Approve</button>
                                        &nbsp;
                                        <button type="" className='Reject-btn'>Reject</button>


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
    </Fragment>
  )
}

export default Home