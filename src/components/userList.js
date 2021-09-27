import React from "react";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { deleteUser } from "../Redux/actions/allActions";
import { Link } from "react-router-dom";
const UserList = ({ data, isSelectAll}) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = data;
  return (
    <tr className='userdata-lists'>
      <td>
        <div className="custom-control custom-checkbox">
          <input checked={isSelectAll} type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar name={name} className="mr-2" size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='action-btn-container'>
        <Link to={`/edit_user/${id}`}>
          <button className="edit-user"><i class="fas fa-pen-nib"></i>Edit</button>
        </Link>

        <button className="delete-user" onClick={() => dispatch(deleteUser(id))}><i class="fas fa-trash"></i>Delete</button>
      </td>
    </tr>
  );
};

export default UserList;
