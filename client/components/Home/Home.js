import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect ( () => {
    fetch('http://localhost:5000/user')
    // here, method is GET, which is default method, that's why we don't need to mention the method here
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  const handleUserDelete = (id) => {
    // confirmation of DELETE
    const proceed = window.confirm('Are you sure to remove this user\'s data?');
    if(proceed) {
      console.log(`deleting user with ${id}`);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
          // console.log(data)
          console.log('deleted');
          const remainingUser = users.filter(user => user._id !== id);
          setUsers(remainingUser);
        }
      });
    }
  }

  return (
    <>
      <h2>
        Available Users: { users.length }
      </h2>
      <div>
        {users.map(user =>
          <p key={user._id}>
            <b>Name:</b> {user.name}, <b>Email:</b> {user.email}
            <Link to={`/update/${user._id}`}><button className='update-button'>Update</button></Link>
            <button className='delete-button' onClick={ () => handleUserDelete(user._id) }>Delete</button>
          </p>
        )}
      </div>
    </>
  );
}
 
export default Home;