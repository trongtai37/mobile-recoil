import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login';
import Register from './components/Register';
import { useRecoilValue } from 'recoil';
import { _user } from './recoil';

const App = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <PrivateRoute exact path="/details" component={Details} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
};

const PrivateRoute = (props) => {
  const user = useRecoilValue(_user);
  return user ? <Route {...props} /> : <Redirect to="/login" />;
};

export default App;
