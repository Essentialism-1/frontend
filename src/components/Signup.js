import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { signup } from '../actions';

import {
  WhiteP
} from '../styled/styledComponents';

const Signup = props => {

  const { register, handleSubmit, errors } = useForm();

  // const onSubmit = user => {
  //   axiosWithAuth()
  //   .post('/login', user)
  //   // will update with endpoint ^^
  //   .then(res => {
  //     console.log(res.data);
  //     props.history.push('/');
  //   })
  //   .catch(err => console.log('signup onsubmit error', err))
  // };
  const onSubmit = newUser => {
    signup(newUser);
    console.log('signup onsubmit', newUser);
    props.history.push('/');
  }

  return (
    <div className='signUp'>
      <Form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h1><span className='font-weight-bold'>Sign Up</span></h1>
        <FormGroup className='sign-up'>
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
        <Button><input type="submit" /></Button>
      </Form>
      <Link to='/'>
        <WhiteP>Already have an account? Sign in.</WhiteP>
      </Link>
    </div>
  )
}

export default connect(null, { signup })(Signup);
