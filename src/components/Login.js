import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import {
  WhiteP
} from '../styled/styledComponents';

const Login = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axiosWithAuth()
    .post('/login')
    console.log('onSubmit pre-');
    // waiting for endpoint ^^
  };

  return (
    <div className='login-page'>
      <h2>Login</h2>
      <Form className='login-forms'>
        <FormGroup className='login-groups'>
          <label htmlFor='email'>Email</label>
          <input 
            name='email'  
            type="email"
            id='email'
            autoComplete='off'
            ref={register({ 
              required: 'Email required',
            })} 
          />
          {errors.email && <p>Email is required</p>}
        </FormGroup>

        <FormGroup className='login-groups'>
          <label htmlFor='email'>Password</label>
          <input 
            name='password'  
            type='password'
            id='password'
            ref={register({ 
              required: 'Password required', 
              minLength: {
                length: 8,
                message: 'Password must contain at least 8 characters'
              }
            })} 
          />
          {errors.password && errors.password.type 
          === 'minLength' && 
          <p>This field has a minimum of 5 characters</p>}
          {errors.password && <p>{errors.password.message}</p>}
          {/* you can put a className on <p> tag and change text color of error messages! */}
        </FormGroup>

        <Button color='primary' type="submit">Login</Button>

      </Form>
      <Link to='/signup'>
        <WhiteP>Don't have an account? Sign up!</WhiteP>
      </Link>
    </div>
  )
}
// added spacing and a little more detail to form

export default Login;