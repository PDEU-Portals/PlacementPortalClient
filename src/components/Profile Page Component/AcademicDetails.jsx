import React, { useState} from 'react'
import './Css/AcademicDetails.css'

export const AcademicDetails = () => {

     const [editMode, setEditMode] = useState(false)
     const [academicProfile, setAcademicProfile] = useState({
        rollNo : "21BCP256",
        SGPA : "9.2",
        Branch : "Computer Science and Engineering"
    }) 

    const handleEditClick = () =>{
        setEditMode(true);
    }
    const handleCancleClick = () => {
        setEditMode(false)
    }
    const handleSaveClick = () =>{
        setEditMode(false)
    }
    const handleChange = event => {
        console.log(event.target.value)
        setAcademicProfile({
          ...academicProfile,
        [event.target.name] : event.target.value
        });
      };

    return (
        <>
            <div className="bg-gray-200 rounded-3xl mx-4 py-4">
                {  editMode ? (
                    <>
                        <>
                     <div className="table-head">
                    <div className="heading">
                        <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2> 
                    </div>
                    <div className="buttons">
                        <button onClick={handleSaveClick}>
                            Save
                        </button>
                        <button onClick={handleCancleClick}>
                            Cancle 
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <tbody>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    Roll NO
                                </th>
                                <td className="py-4 px-6">
                                    <input type="text"
                                        id='rollNo'
                                        name='rollNo'
                                        value={AcademicDetails.rollNo}
                                        onChange={handleChange}
                                        placeholder = "Enter you roll number here"
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-500 whitespace-nowrap ">
                                    CGPA
                                </th>
                                <td className="py-4 px-6">
                                <input type="text"
                                        id='SGPA'
                                        name='SGPA'
                                        value={AcademicDetails.SGPA}
                                        onChange={handleChange}
                                        placeholder = "Enter your SGPA here"
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    BRANCH
                                </th>
                                <td className="py-4 px-6">
                                <input type="text"
                                        id='branch'
                                        name='Branch'
                                        value={AcademicDetails.Branch}
                                        onChange={handleChange}
                                        placeholder = "Enter your branch here"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    </>
                    </>
                     
                ) : (
                    <>
                    <div className="table-head">
                    <div className="heading">
                        <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2> 
                    </div>
                    <div className="edit-button">
                        <button id='edit-button-details' onClick={handleEditClick}>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <tbody>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    Roll NO
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.rollNo}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-500 whitespace-nowrap ">
                                    CGPA
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.SGPA}
                                </td>
                            </tr>
                            <tr className="bg-white  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    BRANCH
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.Branch}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    </>
                )}
            </div>
        </>
    )
}
