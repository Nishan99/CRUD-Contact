import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { add } from "../Redux/actions/allActions";
import { remove } from "../Redux/actions/allActions";
import shortid from 'shortid'
import {useHistory} from 'react-router-dom'
const NewContact = () => {
  const dispatch=useDispatch()
  const history = useHistory()

  const [userDetails, setUserDetails] = useState({
    id:shortid.generate(),
    name: "",
    phone: "",
    email: "",
  });

  const createUser = (e) => {
    e.preventDefault();
    dispatch(add(userDetails))
    history.push('/')


  };
  return (
    <div class="card container bg-light shadow">
      <form onSubmit={(e) => createUser(e)}>
        <h3 className="pt-4 px-3">Add a New User</h3>
        <div class="card-body">
          <div className="form-group my-3">
            <input
            required
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
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              
              type="email"
              placeholder="Enter user Email"
              className="form-control"
            />
          </div>
          <div className="form-group my-3">
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
