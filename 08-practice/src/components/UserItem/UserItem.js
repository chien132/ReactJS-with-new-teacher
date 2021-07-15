import "./UserItem.css";

import React from "react";

export default function UserItem(props) {
  function clickHandler() {
    props.onDel(props.user);
  }
  return (
    <div className="user-item" onClick={clickHandler}>
      {props.user.username + " ( " + props.user.age + " years old)"}
    </div>
  );
}
