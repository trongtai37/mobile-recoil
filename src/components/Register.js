import React from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const history = useHistory();
  const handleRegister = (values) => {
    alert(`
      Register successfully!
      username: KhanhTX
      email: ${values.email}
    `);
    history.push('/login');
  };
  return (
    <RegisterContainer>
      <div className="h1" style={{ display: 'block', marginTop: 30 }}>
        Register
      </div>
      <form
        style={{ width: 500, marginTop: 60 }}
        onClick={handleSubmit(handleRegister)}
      >
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            ref={register({
              required: 'Email is required.',
              minLength: {
                value: 5,
                message: 'Email must be geater than 5 characters.',
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Email is wrong format.',
              },
            })}
          />
          <div style={{ color: 'red', marginTop: 5 }}>
            {errors.email && errors.email.message}
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            ref={register({
              required: 'Password is required.',
              minLength: {
                value: 5,
                message: 'Password must be geater than 5 characters.',
              },
              maxLength: {
                value: 16,
                message: 'Password must be geater than 5 characters.',
              },
            })}
          />
          <div style={{ color: 'red', marginTop: 5 }}>
            {errors.password && errors.password.message}
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmedPassword"
            className="form-control"
            placeholder="Confirm Password"
            ref={register({
              required: 'Confirm Password is required.',
              validate: (value) =>
                value === getValues('password') ||
                'Confirm Password is not matched.',
            })}
          />
          <div style={{ color: 'red', marginTop: 5 }}>
            {errors.confirmedPassword && errors.confirmedPassword.message}
          </div>
        </div>
        <ButtonContainer type="submit">Register</ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Register;
