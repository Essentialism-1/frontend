import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './formStyle.css';
import {
  WhiteP,
  RedError,
} from '../styled/styledComponents';


const EditUser = () => {

  const { register, handleSubmit, errors } = useForm();

  return (
    <div className='editUser-container'>

      <h1>Edit Account</h1>
      <Form className='edit-form'>

        <FormGroup className='editUser'>
          <label>Edit Full Name:</label>
          <input
            autoComplete='off'
            name='fullName'
            ref={register({ required: true, minLength: 2 })} />
          {errors.fullName &&
            <RedError>Full name is required</RedError>}
        </FormGroup>

        <FormGroup className='sign-up'>
          <label>Edit Email:</label>
          <input
            autoComplete='off'
            name='email'
            type='email'
            ref={register({ required: true, })} />
          {errors.email && <RedError>Email is required</RedError>}
        </FormGroup>

        <FormGroup className='editUser'>
          <label>Edit Password:</label>
          <input
            type='password'
            name='password'
            ref={register({ required: true, minLength: 5 })} />
          {errors.password && errors.password.type === 'minLength' &&
            <RedError>This field has a minimum of 5 characters</RedError>}
          {errors.password && <RedError>Password is required</RedError>}

        </FormGroup>
        <Button
          color='success'
          type='submit'>Edit Complete</Button>

      </Form>
      <Link to='/'>
        <WhiteP>Already have an account? Sign in.</WhiteP>
      </Link>
    </div>
  )
}

export default EditUser;
