// Javier build login form!
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input name='email' placeholder='JohnDoe@example.com' type="email" />
        <input name='password' placeholder='Password' type="password" />
      </form>

    </div>
  )
}

export default Login;