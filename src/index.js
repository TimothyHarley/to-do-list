import 'bootstrap';
import './index.scss';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import loadNavbar from './components/navbar/navbar';
import loginButton from './auth/auth';
import navHelpers from './helpers/navHelpers';
import userDiv from './user/user';
import initializeTasksPage from './components/TasksPage/tasksPage';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadNavbar();
  loginButton();
  navHelpers.checkLoginStatus(initializeTasksPage);
  userDiv();
};

initApp();
