import React from "react";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { deleteUser } from "../Redux/actions/allActions";
import { Link } from "react-router-dom";
import "../styles/App.scss";
const UserList = ({ data, isSelectAll}) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = data;
  return (
    <tr>
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
      <td>
        <Link to={`/edit_user/${id}`}>
          <MdModeEdit className="btn-action btn-action-edit" />
        </Link>

        <AiFillDelete
          onClick={() => dispatch(deleteUser(id))}
          className="btn-action btn-action-delete"
        />
      </td>
    </tr>
  );
};

export default UserList;
