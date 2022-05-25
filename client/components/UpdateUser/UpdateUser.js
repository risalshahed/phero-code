import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  // retrieve id from "home" component
  const {id, name} = useParams();

  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);

  const handleUpdateUser = event => {
    // console.log(event);
    event.preventDefault();
    // input form a, event.target."name".value dte hy
    const name = event.target.name.value;     // name="name"
    const email = event.target.email.value;   // name="email"

    const updatedUser = { name, email };

    // send data to server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: 'PUT',  // put => update if already exists, otherwise add
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success', data);
      alert('yoh nigga, it\'s updated');
      event.target.reset();   // clear input form fields after submit
    })
  }

  return (
    <>
      <h2>Update User {id}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder='Name' required />
        <br />
        <input type="text" name="email" placeholder='Email' required />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </>
  );
}
 
export default UpdateUser;