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
  
  return (
    <div className='userTable'>
      <Link to={"/add"} className='addButton'>New Job Sheet</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>#</th>
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
            jobSheets.map((jobSheets, index) => (
              <tr key={jobSheets._id}>
                <td>{index + 1}</td>
                <td>{jobSheets.clientId}</td>
                <td>{jobSheets.clientName}</td>
                <td>{jobSheets.contactInfo}</td>
                <td>{jobSheets.receivedDate}</td>
                <td>{jobSheets.inventoryReceived}</td>
                <td>{jobSheets.reportedIssues}</td>
                <td>{jobSheets.clientNotes}</td>
                <td>{jobSheets.assignedTechnician}</td>
                <td>{jobSheets.estimatedAmount}</td>
                <td>{jobSheets.deadline}</td>
                <td>{jobSheets.status}</td>
                <td className='actionButtons'>
                  <button>View</button>
                  <Link to={`/edit/${jobSheets._id}`}>Edit</Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default User
