import "./UserList.css";
import UserItem from "../UserItem/UserItem";

import React from "react";

export default function UserList(props) {
  function delUserHandler(user) {
    return props.onDeleteUser(user);
  }
  return (
    <div className="user-list">
      {props.userlist.map((user) => (
        <UserItem key={user.id} user={user} onDel={delUserHandler} />
      ))}
    </div>
  );
}
