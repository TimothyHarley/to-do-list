import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import loadNavbar from './components/navbar/navbar';
import loginButton from './auth/auth';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadNavbar();
  loginButton();
};

initApp();
