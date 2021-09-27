import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserList from "./userList";
function Contact() {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const userInfo = useSelector((state) => state.userData.datas);
  console.log("user dertails", userInfo);

  return (
    <table className="table shadow container">
      <thead>
        <tr>
          <th>
            <div className="custom-control custom-checkbox">
              <input
                id="selectBox"
                type="checkbox"
                className="custom-control-input"
                onClick={()=>setIsSelectAll(!isSelectAll)}
              />
              <label
                htmlFor="selectBox"
                className="custom-control-label"
              ></label>
            </div>
          </th>

          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.map((data) => (
          <UserList data={data} isSelectAll={isSelectAll} key={data.id} />
        ))}
      </tbody>
    </table>
  );
}

export default Contact;
