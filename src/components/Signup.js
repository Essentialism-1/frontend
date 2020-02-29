// Javier build signup form!
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';


const Signup = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='signUp'>
      <Form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h1><span className='font-weight-bold'>Sign Up</span></h1>
        <FormGroup className='form-group'>
          <label>First Name:</label>
          <input autoComplete='off' name='firstName' ref={register({ required: true, minLength: 2 })} />
          {errors.firstName && <p>Name is required</p>}
        </FormGroup>
        <FormGroup>
          <label>Last Name:</label>
          <input autoComplete='off' name='lastName' ref={register({ required: true, minLength: 2 })} />
          {errors.lastName && <p>Name is required</p>}
        </FormGroup>
        <FormGroup>
          <label>Email:</label>
          <input autoComplete='off' name='email' type='email' ref={register({ required: true, })} />
          {errors.email && <p>Email is required</p>}
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            ref={register({ required: true, minLength: 5 })} />
          {errors.password && errors.password.type === 'minLength' &&
            <p>This field has a minimum of 5 characters</p>}
          {errors.password && <p>Password is required</p>}

        </FormGroup>
        <input type="submit" />
      </Form>
    </div>
  )
}

export default Signup;
