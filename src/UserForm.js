import React, { useState } from "react";
import "./App.css";

function UserForm() {
  // State Hook - `useState`
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedUser, setUpdatedUser] = useState([]);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  // Helper Functions

  /* Adds a new user to the list array*/
  function addUser() {
    // ! Check for empty user
    if (!newUserName || !newUserEmail) {
      alert("Please enter a user name and email.");
      return;
    }

    const user = {
      id: Math.floor(Math.random() * 1000),
      name: newUserName,
      email: newUserEmail
    };

    // Add new user to users array
    setUsers((oldList) => [...oldList, user]);

    // Reset newUser back to original state
    setNewUserName("");
    setNewUserEmail("");
  }

  /* Deletes an user based on the `user.id` key */
  function deleteUser(id) {
    const newArray = users.filter((user) => user.id !== id);
    setUsers(newArray);
  }

  /* Edit an user text after creating it. */
  function editUser(id, updatedUser) {
    // Get the current user
    const currentUser = users.find((user) => user.id === id);

    // Create a new user with same id
    const newUser = {
      id: currentUser.id,
      name: updatedName,
      email: updatedEmail
    };

    deleteUser(id);

    // Replace user in the user list
    setUsers((oldList) => [...oldList, newUser]);
    setUpdatedName("");
    setUpdatedEmail("");

    setShowEdit(-1);
  }

  // Main part of app
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>Add a user to the list</h1>
      {/* 2. Add new user (input) */}
      <input
        type="text"
        placeholder="Add user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Add user email..."
        value={newUserEmail}
        onChange={(e) => setNewUserEmail(e.target.value)}
      />

      {/* Add (button) */}
      <button onClick={() => addUser()}>Add</button>
      {/* 1. Header  */}
      <h1>List of users</h1>

      {/* 3. List of todos (unordered list) */}
      <ul>
        {users.map((user) => {
          return (
            <div>
              <li key={user.id} onClick={() => setShowEdit(user.id)}>
                {user.name} ({user.email})
                <button
                  className="delete-button"
                  onClick={() => deleteUser(user.id)}
                >
                  ❌
                </button>
              </li>

              {showEdit === user.id ? (
                <div>
                  <input
                    type="text"
                    placeholder="add updated name"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="add updated email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail                (e.target.value)}
                    />
                    <button onClick={() => editUser(user.id, updatedUser)}>
                      Update
                    </button>
                  </div>
                  
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
);
}

export default UserForm      