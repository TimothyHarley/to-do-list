import 'bootstrap';
import './index.scss';
import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import loadNavbar from './components/navbar/navbar';
import loginButton from './auth/auth';
import navHelpers from './helpers/navHelpers';
import userDiv from './user/user';
import tasksPage from './components/TasksPage/tasksPage';
import addNewTask from './components/TasksPage/addTask';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadNavbar();
  loginButton();
  navHelpers.checkLoginStatus(tasksPage.initializeTasksPage);
  userDiv();
  $('body').on('click', '.addTask', addNewTask);
};

initApp();
