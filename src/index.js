import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import loadNavbar from './components/navbar/navbar';
import loginButton from './auth/auth';
import checkLoginStatus from './helpers/navHelpers';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadNavbar();
  loginButton();
  checkLoginStatus();
};

initApp();
