import React from 'react'
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
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
            <tr>
                <td>1.</td>
                <td>12</td>
                <td>ashish</td>
                <td>9333</td>
                <td>12-05</td>
                <td>key</td>
                <td>oiuy</td>
                <td>ok</td>
                <td>ashish</td>
                <td>123</td>
                <td>56-12</td>
                <td>pending</td>
                <td className='actionButtons'>
                    <button>View</button>
                    <Link to={'/edit'}>Edit</Link>
                    <button>Delete</button>
                </td>
                
                
            </tr>
        </tbody>
      </table>

    </div>
  )
}

export default User
