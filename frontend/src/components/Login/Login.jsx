import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './login.css';

const Login = ({ onClick }) => {
  return (
    <div className='login'>
      <AiOutlineUser className='login-icon' onClick={onClick} />
      <span>MyAccount</span>
    </div>
  );
};

export default Login;
