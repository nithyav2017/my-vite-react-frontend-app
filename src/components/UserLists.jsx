import React from 'react'

const UserLists = ({users}) => {
  return (
    <>
    <ul>
        {users.map((user,index) =>(
            <li>
                <div key = {index}>
                    <p>{user}</p>
                </div>
            </li>
        ))}
    </ul>
    </>
  )
}

export default UserLists