import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <AiOutlineUser className='icon' />
      <span>MyAccount</span>
    </div>
  );
};

export default Login;
