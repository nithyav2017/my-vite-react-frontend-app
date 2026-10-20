import React from 'react'

const ChildCallback = ({ onAddUser }) => {

const handleClick = () => {
    const newUser = prompt("Enter a new user name:");
    if (newUser) {
      onAddUser(newUser);
    }
}
  return (
    <div>
      <button onClick={handleClick}>Add User</button>
    </div>
  )
}

export default ChildCallback