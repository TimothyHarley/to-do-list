import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = (initializeTasksPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks').show();
      $('#done').hide();
      $('#auth').hide();
      $('#user').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-done').show();
      $('#navbar-button-user').show();
      initializeTasksPage();
    } else {
      $('#tasks').hide();
      $('#done').hide();
      $('#auth').show();
      $('#user').hide();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-done').hide();
      $('#navbar-button-user').hide();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
