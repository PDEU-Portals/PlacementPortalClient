import React,{useState} from 'react'
import axios from 'axios'
import ManageStudentCard from './ManageRecruiterCard.jsx'
import AdminHeader from '../Header/AdminHeader.js';


const ManageRecruiter = () => {
    const [recruiters, setRecruiters] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  
    const handleDelete = (index) => {
      // Make an Axios request to delete the item
      axios.delete(`/api/recruiters/${index}`)
        .then(() => {
          // If the delete request is successful, update the state to remove the deleted item
          const updatedRecruiters = recruiters.filter((_, i) => i !== index);
          setRecruiters(updatedRecruiters);
        })
        .catch((error) => {
          // Handle error if the delete request fails
          console.log('Error deleting item:', error);
        });
    };
  
    return (
      <>
       <AdminHeader/>
        <div className="flex justify-between">
          <h1 className="mx-8 font-bold py-2 px-0 text-[#1F3368] text-left text-2xl">Manage Recruiters</h1>
          <div className="flex">
            {/* Search input and button */}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap mx-32">
            {recruiters.map((number, index) => (
              <ManageStudentCard key={index} onDelete={() => handleDelete(index)} />
            ))}
          </div>
        </div>
        <div>footer</div>
      </>
    );
  };

export default ManageRecruiter