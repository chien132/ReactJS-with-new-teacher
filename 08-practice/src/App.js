import UserList from "./components/UserList/UserList";
import InputForm from "./components/UserInput/InputForm";
import React, { useState } from "react";
const userListInit = [
  {
    id: "u1",
    username: "admin",
    age: 25,
  },
  {
    id: "u2",
    username: "user",
    age: 15,
  },
  {
    id: "u3",
    username: "anon",
    age: 35,
  },
];
function App() {
  const [userList, setUserList] = useState(userListInit);
  function addUserHandler(newUser) {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random(),
          username: newUser.username,
          age: newUser.age,
        },
      ];
    });
  }
  function deleteUserHandler(deluser) {
    setUserList((prevUserList) => {
      return prevUserList.filter((user) => user.id !== deluser.id);
    });
  }
  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <UserList userlist={userList} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
