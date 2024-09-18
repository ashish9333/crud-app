// src/components/ViewjobSheets.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './View.css'; 

const View = () => {
  const { id } = useParams(); 
  const [jobSheets, setjobSheets] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/job/getjobSheets/${id}`)
      .then(response => {
        setjobSheets(response.data.jobSheets);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);

  if (error) return <div className="error">Error: {error}</div>;
  if (!jobSheets) return <div className="loading">Loading...</div>;

  return (
    <div className="viewjobSheet">
      <h2>Job Sheet Details</h2>
      <ul>
        <li><strong>Client Name:</strong> {jobSheets.clientName}</li>
        <li><strong>Contact Info:</strong> {jobSheets.contactInfo}</li>
        <li><strong>Received Date:</strong> {jobSheets.receiveDate}</li>
        <li><strong>Inventory Received:</strong> {jobSheets.inventoryReceived}</li>
        <li><strong>Reported Issues:</strong> {jobSheets.reportedIssues}</li>
        <li><strong>Client Notes:</strong> {jobSheets.clientNotes}</li>
        <li><strong>Assigned Technician:</strong> {jobSheets.assignedTechnician}</li>
        <li><strong>Deadline:</strong> {jobSheets.deadline}</li>
        <li><strong>Estimated Amounts:</strong> {jobSheets.estimatedAmounts}</li>
        <li><strong>Status:</strong> {jobSheets.status}</li>
      </ul>
    </div>
  );
};

export default View;
