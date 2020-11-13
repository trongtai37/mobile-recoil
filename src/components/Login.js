import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { _user } from '../recoil';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const setUser = useSetRecoilState(_user);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const loginUser = (values) => {
    const user = {
      username: 'KhanhTX',
      ...values,
    };

    setUser(user);
    history.push('/');
  };

  return (
    <LoginContainer>
      <div className="h1" style={{ display: 'block', marginTop: 30 }}>
        Login
      </div>
      <form
        style={{ width: 350, marginTop: 60 }}
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
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
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Email is wrong format.',
              },
            })}
          />
          <div style={{ color: 'red', marginTop: 5 }}>
            {errors.email && errors.email.message}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
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
        <ButtonContainer type="submit">Login</ButtonContainer>
        <Link to="/register">Or register here.</Link>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Login;
