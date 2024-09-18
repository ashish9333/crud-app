import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import "./Add.css";

const Add = () => {

    const users={
        clientName:"",
        contactInfo:"",
        receiveDate:"",
        inventoryReceived:"",
        uploadInventoryImage:"",
        reportedIssues:"",
        clientNotes:"",
        assignedTechnician:"",
        deadline:"",
        estimatedAmounts:"",
        status:""
        
    }

    const [user,setUser]=useState(users);

    const inputHandler = (e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});

    }

    const submitForm = async(e) =>{
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8000/job/addJobSheet",user)
        .then((response)=>{
            console.log(response)
        }).catch(error=>console.log(error))
    }

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h2>New Job Sheet</h2>
      <form className='addUserForm' onSubmit={submitForm}> 
        <div className='inputGroup'>
            <label htmlFor='clientName'>Client Name</label>
            <input type='text' onChange={inputHandler} id='clientName' name='clientName' autoCapitalize='off' placeholder='Client Name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='contactInfo'>Contact Info</label>
            <input type='number' onChange={inputHandler} id='contactInfo' name='contactInfo' autoCapitalize='off' placeholder='Client phone no'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='receiveDate'>inventory Received date</label>
            <input type='date' onChange={inputHandler} id='receiveDate' name='receiveDate' autoCapitalize='off' placeholder='inventoryReceived date'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='inventoryReceived'>inventoryReceived</label>
            <input type='text' onChange={inputHandler} id='inventoryReceived' name='inventoryReceived' autoCapitalize='off' placeholder='Inventory inventoryReceived'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='image'>Image/Supporting Document</label>
            <input type='file' onChange={inputHandler} id='image' name='image' autoCapitalize='off'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='reportedIssues'>Reported Issues</label>
            <input type='text' onChange={inputHandler} id='reportedIssues' name='reportedIssues' autoCapitalize='off' placeholder='Client Issues'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='clientNotes'>Client Notes</label>
            <input type='text' onChange={inputHandler} id='clientNotes' name='clientNotes' autoCapitalize='off' placeholder='Client Notes'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='assignedTechnician'>Assigned assignedTechnician</label>
            <input type='text' onChange={inputHandler} id='assignedTechnician' name='assignedTechnician' autoCapitalize='off' placeholder='assignedTechnician Name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='deadline'>Deadline</label>
            <input type='date' onChange={inputHandler} id='deadline' name='deadline' autoCapitalize='off'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='estimatedAmounts'>Estimated Amounts</label>
            <input type='text' onChange={inputHandler} id='estimatedAmounts' name='estimatedAmounts' autoCapitalize='off' placeholder='estimatedAmounts'/>
        </div>
        <label for="status">Choose a status:</label>
        <select id="status" name="status" onChange={inputHandler}>
        <option value="Pending">Pending</option>
        <option value="InProgress">In Progress</option>
        <option value="Active">Active</option>
        <option value="Closed">Closed</option>
        </select>
        <div className='inputGroup'>
            <button type='submit'>Save Job Sheet</button>
        </div>
      </form>
    </div>
  )
}

export default Add
