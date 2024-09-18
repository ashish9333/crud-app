// import React from 'react'
import React, { useState, useEffect } from 'react';
import "./User.css";
import { Link } from "react-router-dom";
import axios from 'axios'; 

const User = () => {
  const [jobSheets, setjobSheets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/job/getjobSheets')
      .then(response => {
        setjobSheets(response.data.jobSheets || []); // Store the data in the state
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8000/job/deleteJobSheet/${id}`)
    .then((response)=>{
      console.log("deleted sucesssfully",response.data)
      const updatedJobSheets = [...jobSheets];
                    const index = updatedJobSheets.findIndex(jobSheet => jobSheet._id === id);

          if (index !== -1) {
            updatedJobSheets.splice(index, 1);
            setjobSheets(updatedJobSheets);
          }
    }).catch(error => {
      console.error('Error deleting job sheet:', error);
    });
  }

  return (
    <div className='userTable'>
      <Link to={"/add"} className='addButton'>New Job Sheet</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Client Id</th>
                <th>Client Name</th>
                <th>Contact Info</th>
                <th>Received Date</th>
                <th>Inventory Received</th>
                <th>Reported Issues</th>
                <th>lient Notes</th>
                <th>Assigned Technician</th>
                <th>Estimated Amount</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
            jobSheets.length > 0 && jobSheets.map((jobSheets, index) => (
              <tr key={jobSheets._id}>
                <td>{jobSheets.id}</td>
                <td>{jobSheets.clientName}</td>
                <td>{jobSheets.contactInfo}</td>
                <td>{jobSheets.receiveDate}</td>
                <td>{jobSheets.inventoryReceived}</td>
                <td>{jobSheets.reportedIssues}</td>
                <td>{jobSheets.clientNotes}</td>
                <td>{jobSheets.assignedTechnician}</td>
                <td>{jobSheets.estimatedAmounts}</td>
                <td>{jobSheets.deadline}</td>
                <td>{jobSheets.status}</td>
                <td className='actionButtons'>
                  <div className="flex">
                  <Link to={`/View/${jobSheets._id}`}>
                    <button>View</button>
                  </Link>
                  <Link to={`/add?id=${jobSheets?._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(jobSheets._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          }
          {
            jobSheets.length === 0 && <tr className='norecord'>
            <td colSpan="12" className="centerText">No Record Found</td>
          </tr>
          }
        </tbody>
      </table>

    </div>
  )
}

export default User
