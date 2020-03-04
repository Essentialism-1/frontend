import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup } from 'reactstrap';
import './formStyle.css';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { signup } from '../actions';

import {
  WhiteP,
  RedError,
} from '../styled/styledComponents';

const Signup = props => {
  const { register, handleSubmit, errors } = useForm({});

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
  const onSubmit = (newUser, history) => {
    props.signup(newUser, props.history);
    console.log('signup onsubmit', newUser);
  }
  return (

    <div className='signup-container'>
      <div>
        <h1>Sign Up</h1>
      </div>

      <Form className='login-forms' onSubmit={handleSubmit(onSubmit)}>

        <FormGroup className='sign-up'>
          <label>Email:</label>
          <input
            autoComplete='off'
            name='email'
            type='email'
            ref={register({
              required: true,
            })}
          />
          {errors.email && <RedError>Email is required</RedError>}

        </FormGroup>

        <FormGroup className='sign-up'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
          {errors.password && errors.password.type === 'minLength' &&
            <RedError>This field has a minimum of 5 characters</RedError>}
          {errors.password && <RedError>Password is required</RedError>}

        </FormGroup>

        <FormGroup className='sign-up'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            ref={register({
              required: false,
            })}
          />
        </FormGroup>
        <Button color='success' type='submit'>Sign Up!</Button>

      </Form>
      <Link to='/'>
        <WhiteP>Already have an account? Sign in.</WhiteP>
      </Link>
    </div>
  )
}

export default connect(null, { signup })(Signup);
