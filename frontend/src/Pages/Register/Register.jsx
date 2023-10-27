import './register.css';
import InputText from '../../components/InputText/InputText';

const Register = () => {
  return (
    <div className='registerPage'>
      Create an account
      <InputText labelText='Name' />
      <InputText labelText='Email' />
      <InputText labelText='Password' />
      <InputText labelText='Repeat Passwords' />
    </div>
  );
};

export default Register;
