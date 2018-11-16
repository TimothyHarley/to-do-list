// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import loadNavbar from './components/navbar/navbar';
import loginButton from './auth/auth';

const initApp = () => {
  loadNavbar();
  loginButton();
};

initApp();
