import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axiosWithAuth()
    .post('/login')
    console.log('onSubmit pre-');
  };

  return (
    <div className='login-page'>
      <h2>Login</h2>

      <Form className='login-forms'>

      <FormGroup className='login-groups'>
      <label>Email: </label>
        <input 
        name='email'  
        type="email"
        autoComplete='off'
        ref={register({ required: true })} />
        {errors.email && <p>Email is required</p>}
        </FormGroup>

        <FormGroup className='login-groups'>
        <label>Password: </label>
        <input 
        name='password'  
        type="password"
        ref={register({ required: true, minLength: 5 })} />
        {errors.password && errors.password.type 
        === 'minLength' && 
        <p>This field has a minimum of 5 characters</p>}
        {errors.password && <p>Password is required</p>}
        </FormGroup>

        <Button color='primary' type="submit">Login</Button>

      </Form>

    </div>
  )
}

export default Login;