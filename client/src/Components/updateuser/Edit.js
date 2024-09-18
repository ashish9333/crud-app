import React from 'react'
import { Link } from "react-router-dom";
import "./Edit.css";

const Edit = () => {
  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h2>Edit Job Sheet</h2>
    <form className='addUserForm'> 
      <div className='inputGroup'>
          <label htmlFor='cname'>Client Name</label>
          <input type='text' id='cname' name='cname' autoCapitalize='off' placeholder='Client Name'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='phno'>Contact Info</label>
          <input type='number' id='phno' name='phno' autoCapitalize='off' placeholder='Client phone no'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='rdate'>Received date</label>
          <input type='date' id='rdate' name='rdate' autoCapitalize='off' placeholder='Received date'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='received'>Inventory Received</label>
          <input type='text' id='received' name='received' autoCapitalize='off' placeholder='Inventory Received'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='image'>Image/Supporting Document</label>
          <input type='file' id='image' name='image' autoCapitalize='off'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='rissue'>Reported Issues</label>
          <input type='text' id='rissue' name='rissue' autoCapitalize='off' placeholder='Client Issues'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='cnotes'>Client Notes</label>
          <input type='text' id='cnotes' name='cnotes' autoCapitalize='off' placeholder='Client Notes'/>
      </div>
      {/* <div className='inputGroup'>
          <label htmlFor='cname'>Client Name</label>
          <input type='text' id='cname' name='cname' autoCapitalize='off' placeholder='Client Name'/>
      </div> */}
      <div className='inputGroup'>
          <label htmlFor='technician'>Assigned Technician</label>
          <input type='text' id='technician' name='technician' autoCapitalize='off' placeholder='Technician Name'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='deadline'>Deadline</label>
          <input type='date' id='deadline' name='cname' autoCapitalize='off'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='amount'>CEstimated Amount</label>
          <input type='text' id='amount' name='amount' autoCapitalize='off' placeholder='Amount'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='cname'>Client Name</label>
          <input type='text' id='cname' name='cname' autoCapitalize='off' placeholder='Client Name'/>
      </div>
      <div className='inputGroup'>
          <button type='submit'>Save Changes</button>
      </div>
    </form>
  </div>
  )
}

export default Edit
