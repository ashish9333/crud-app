import React, { useState, useEffect } from 'react'
import { Link , useParams, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import "./Add.css";

const Add = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search); 
    const id = queryParams.get('id');
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
        status:"Pending"
        
    }

    const [user,setUser]=useState(users);
    const navigate =useNavigate(); 

    const inputChangeHandler = (e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});

    }

    useEffect(() => {
        if(id) {
        axios.get(`http://localhost:8000/job/getjobSheets?id=${id}`)
          .then(response => {
            const { _id, __v,  ...userDataWithoutId } = response?.data?.jobSheets?.[0] || {};
            const formattedDate = new Date(userDataWithoutId.receiveDate).toISOString().split('T')[0];
            setUser({
              ...userDataWithoutId,
              receiveDate: new Date(userDataWithoutId.receiveDate).toISOString().split('T')[0],
              deadline: new Date(userDataWithoutId.deadline).toISOString().split('T')[0]
            });
            // setUser(userDataWithoutId)
            console.log('Success:', response.data);
          })
          .catch(error => {
            console.error('Error:', error);
            navigate("/")
          });
        }
      }, [id])

console.log(user,"ddddddddddddddd")
    const submitForm = async(e) =>{
        e.preventDefault();
        console.log(user);
        const url = id ? `http://localhost:8000/job/updateJobSheet/${id}` : 'http://localhost:8000/job/addJobSheet'
        if(id) {
            await axios.put(url,user)
            .then((response)=>{
                navigate("/")
                console.log(response)
            }).catch(error=>
                alert("something went wrong")
            )
        }
        else {
            await axios.post(url,user)
            .then((response)=>{
                navigate("/")
                console.log(response)
            }).catch(error=>
                alert("something went wrong")
            )
        }
       
    }

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h2>New Job Sheet</h2>
      <form className='addUserForm' onSubmit={submitForm}> 
      <div className='inputGroup'>
          <label htmlFor='clientName'>Client Name</label>
          <input type='text' value={user.clientName} onChange={inputChangeHandler} id='clientName' name='clientName' autoCapitalize='off' placeholder='Client Name'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='contactInfo'>Contact Info</label>
          <input type='number' value={user.contactInfo} onChange={inputChangeHandler} id='contactInfo' name='contactInfo' autoCapitalize='off' placeholder='Client phone no'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='receiveDate'>inventory Received date</label>
          <input type='date' value={user.receiveDate} onChange={inputChangeHandler} id='receiveDate' name='receiveDate' autoCapitalize='off' placeholder='inventoryReceived date'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='inventoryReceived'>inventoryReceived</label>
          <input type='text' value={user.inventoryReceived} onChange={inputChangeHandler} id='inventoryReceived' name='inventoryReceived' autoCapitalize='off' placeholder='Inventory inventoryReceived'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='uploadInventoryImage'>Image/Supporting Document</label>
          <input type='file'  value={user.image}onChange={inputChangeHandler} id='uploadInventoryImage' name='uploadInventoryImage' />
      </div>
      <div className='inputGroup'>
          <label htmlFor='reportedIssues'>Reported Issues</label>
          <input type='text' value={user.reportedIssues} onChange={inputChangeHandler} id='reportedIssues' name='reportedIssues' autoCapitalize='off' placeholder='Client Issues'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='clientNotes'>Client Notes</label>
          <input type='text' value={user.clientNotes} onChange={inputChangeHandler} id='clientNotes' name='clientNotes' autoCapitalize='off' placeholder='Client Notes'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='assignedTechnician'>Assigned assignedTechnician</label>
          <input type='text' value={user.assignedTechnician} onChange={inputChangeHandler} id='assignedTechnician' name='assignedTechnician' autoCapitalize='off' placeholder='assignedTechnician Name'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='deadline'>Deadline</label>
          <input type='date' value={user.deadline} onChange={inputChangeHandler} id='deadline' name='deadline' autoCapitalize='off'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor='estimatedAmounts'>Estimated Amounts</label>
          <input type='text' value={user.estimatedAmounts} onChange={inputChangeHandler} id='estimatedAmounts' name='estimatedAmounts' autoCapitalize='off' placeholder='estimatedAmounts'/>
      </div>
      <label for="status">Choose a status:</label>
      <select id="status" name="status" value={user.status} onChange={inputChangeHandler} className='progressStatus'>
      <option value="Pending">Pending</option>
      <option value="InProgress">In Progress</option>
      <option value="Active">Active</option>
      <option value="Closed">Closed</option>
      </select>
        <div className='inputGroup'>
            <button type='submit'>{id ? "Save Changes" : "Save Job Sheet"}</button>
            <button type='buttom'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Add
