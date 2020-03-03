import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formStyle.css';
import { useHistory } from 'react-router-dom';

// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { login } from '../actions';
import {
  WhiteP
} from '../styled/styledComponents';

const Login = props => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();


  // const onSubmit = credentials => {
  //   axiosWithAuth()
  //   .post('/auth/login', credentials)
  //   .then(res => {
  //     console.log('login onSubmit .then');
  //     localStorage.setItem('token', res.data.payload);
  //     props.history.push('/select-values')
  //   })
  //   .catch(err => console.log('login error', err))
  // };

  const onSubmit = credentials => {
    props.login(credentials, props.history);
    console.log('login onsubmit', credentials)
  }
  // const onSubmit = credentials => {
  //   props.login(credentials);
  //   console.log('login onsubmit', credentials);
  //   history.push('/select-values');
  // }

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