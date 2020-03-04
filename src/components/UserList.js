import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './formStyle.css';
import axios from 'axios';

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page`)
      .then(res => {
        console.log(res.data.data)
        const userList = res.data.data.filter(user =>
          user.first_name.toLowerCase().includes(query.toLowerCase())
        );

        setUsers(userList)

      })
      .catch(err => {
        console.log('error', err)
      })
  }, [query]);


  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className='userList'>

      <h1 className='search-users'>Search List Of Users</h1>


      <div>
        <form className='search-field'>
          <input
            type="text"
            onChange={handleChange}
            value={query}
            name='first_name'
            placeholder='Search by first name'
            autoComplete='off'
          />
        </form>
      </div>
      <div className='user-list'>
        {users.map(user => {
          return (
            <div className="user-list2" key={user.id}>
              <h2 className='font-title'>User: {user.first_name}{' '}{user.last_name} </h2>
              <h3 className='font-email'>Email: {user.email}</h3>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default UserList;