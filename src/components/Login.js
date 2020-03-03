import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';

// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { login } from '../actions';
import {
  WhiteP,
  RedError
} from '../styled/styledComponents';

const Login = props => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = credentials => {
    login(credentials);
    props.history.push('/select-values');
  }
  // probably going to need some conditional logic on the .push. or can I track that in state with some sort of 'hasSelectedChoices'? If the user has already selected values, they can go straight to dashboard after login.

  return (
    <div className='login-page'>
      <h2>Login</h2>
      <Form className='login-forms' onSubmit={handleSubmit(onSubmit)} >

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
          {errors.email && <RedError>Email is required</RedError>}
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
            <RedError>This field has a minimum of 5 characters</RedError>}
          {errors.password && <RedError>{errors.password.message}</RedError>}
          {/* you can put a className on <p> tag and change text color of error messages! */}
        </FormGroup>

        <Button color='success' type="submit">Login</Button>

      </Form>
      <Link to='/signup'>
        <WhiteP>Don't have an account? Sign up!</WhiteP>
      </Link>
    </div>
  )
}
// added spacing and a little more detail to form

export default connect(null, { login })(Login);