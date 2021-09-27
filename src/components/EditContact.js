import React, { useState,useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {updateUsers, changeDetails} from "../Redux/actions/allActions";
import shortid from 'shortid'
import {useHistory,useParams} from 'react-router-dom'
import personReducers from "../Redux/reducers/personReducer";
const EditContact = () => {

  const editData = useSelector(state=>state.userData.selectedData)
  console.log(editData)
  const {id} = useParams()
    const dispatch=useDispatch()
    const history = useHistory()

  const [userDetails, setUserDetails] = useState({
    id:shortid.generate(),
    name: "",
    phone: "",
    email: "",
  });

  const handleEdit=(e)=>{
    e.preventDefault()
    const update_contact = Object.assign(editData,{
      name:userDetails.name,
      phone:userDetails.phone,
      email:userDetails.email
    })

    dispatch(changeDetails(update_contact))
    history.push('/')


  } 
  
  useEffect(()=>{
    dispatch(updateUsers(id))
    if(editData !== null){

      setUserDetails({id:editData.id,name:editData.name,phone:editData.phone,email:editData.email})
      // history.push('/')
    }
  },[editData])

  return (
    <div class="card container bg-light shadow">
      <form onSubmit={(e)=>handleEdit(e)}>
        <h3 className="pt-4 px-3">Update User</h3>
        <div class="card-body">
          <div className="form-group my-3">
            <input
            required
            value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="form-group my-3">
            <input
            required
            value={userDetails.phone}
              onChange={(e) =>
                setUserDetails({ ...userDetails, phone: e.target.value })
              }
              
              type="text"
              className="form-control"
              placeholder="User phone number"
            />
          </div>
          <div className="form-group my-3">
            <input
            required
            value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              
              type="email"
              placeholder="Enter user Email"
              className="form-control"
            />
          </div>
          <div className="form-group my-3">
            <button className="btn btn-danger" type="submit"><i class="fas fa-pen-nib"></i>
              Edit User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
