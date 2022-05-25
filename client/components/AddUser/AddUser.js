/*
--------------------------------------
Sending data from client to server
--------------------------------------
1. Client side: create form
2. obSubmit -> get data from user
3. server -> create user POST method to receive data on backend
4. client -> set fetch with headers, body, post
*/

import React from 'react';

const AddUser = () => {
  const handleAddUser = event => {
    // console.log(event);
    event.preventDefault();
    // input form a, event.target."name".value dte hy
    const name = event.target.name.value;     // name="name"
    const email = event.target.email.value;   // name="email"

    const user = { name, email };

    // send data to server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success', data);
      alert('yoh nigga, it\'s added');
      event.target.reset();   // clear input form fields after submit
    })
  }

  return (
    <>
      <h2>Add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <br />
        <input type="text" name="email" placeholder='Email' required />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default AddUser;