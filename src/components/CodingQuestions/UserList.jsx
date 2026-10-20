import React, { useEffect, useState } from 'react'

const UserList = () => {

 const [users, setUsers]= useState([]);
 const [error, setError]= useState('');
 const [loading, setLoading]= useState(false);

 console.log('rendering phase');
 
    
useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
        setError('Unable to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

    if(loading) return <p>Loading...</p>
    if(error)  return <p role ="alert">{error}</p>
    if(users.length === 0 ) return <p> No users found.</p>
  return (
    <>
    <div>UserList</div>
    
     <ul>
        {users.map((user) => (
            <p key = {user.id} style={{marginBottom:"10px"}}><strong> {user.firstName} {user.lastName}</strong></p>
        ))}
     </ul>
    
    
    </>
  )
}

export default UserList