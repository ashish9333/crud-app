// import React from 'react'
import React, { useState, useEffect } from 'react';
import "./User.css";
import { Link } from "react-router-dom";
import axios from 'axios'; 

const User = () => {
  const [jobSheets, setJobSheets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/job/getJobSheets')
      .then(response => {
        setJobSheets(response.data.jobsheets ||[]); // Store the data in the state
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
            jobSheets.map((jobSheet, index) => (
              <tr key={jobSheet._id}>
                <td>{index + 1}</td>
                <td>{jobSheet.clientId}</td>
                <td>{jobSheet.clientName}</td>
                <td>{jobSheet.contactInfo}</td>
                <td>{jobSheet.receivedDate}</td>
                <td>{jobSheet.inventoryReceived}</td>
                <td>{jobSheet.reportedIssues}</td>
                <td>{jobSheet.clientNotes}</td>
                <td>{jobSheet.assignedTechnician}</td>
                <td>{jobSheet.estimatedAmount}</td>
                <td>{jobSheet.deadline}</td>
                <td>{jobSheet.status}</td>
                <td className='actionButtons'>
                  <button>View</button>
                  <Link to={`/edit/${jobSheet._id}`}>Edit</Link>
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
