import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import { _user } from '../recoil';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const [user, setUser] = useRecoilState(_user);
  const history = useHistory();
  const logoutUser = () => {
    setUser(null);
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-3">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      <Link className="ml-auto" to="/cart">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          my cart
        </ButtonContainer>
      </Link>
      {user ? (
        <>
          <ButtonContainer>{user && user.username}</ButtonContainer>
          <ButtonContainer onClick={logoutUser}>log out</ButtonContainer>
        </>
      ) : (
        <Link to="/login">
          <ButtonContainer>log in</ButtonContainer>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
