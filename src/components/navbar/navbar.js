import $ from 'jquery';
import './navbar.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

const nameCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userName = user.displayName;
      $('#navbar-button-user').html(userName);
    }
  });
};

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-tasks') {
      $('#auth').hide();
      $('#tasks').show();
      $('#done').hide();
      $('#user').hide();
    } else if (e.target.id === 'navbar-button-done') {
      $('#auth').hide();
      $('#tasks').hide();
      $('#done').show();
      $('#user').hide();
    } else if (e.target.id === 'navbar-button-user') {
      $('#auth').hide();
      $('#tasks').hide();
      $('#done').hide();
      $('#user').show();
    } else {
      $('#auth').show();
      $('#tasks').hide();
      $('#done').hide();
      $('#user').hide();
    }
  });
};

const loadNavbar = () => {
  nameCheck();
  const newString = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">To Do List</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a id="navbar-button-tasks" class="nav-link" href="#">Tasks</a>
      </li>
      <li class="nav-item">
        <a id="navbar-button-done" class="nav-link" href="#">Finished Tasks</a>
      </li>
      <li class="nav-item">
        <a id="navbar-button-user" class="nav-link" href="#"></a>
      </li>
    </ul>
  </div>
</nav>
  `;
  $('#navbar').html(newString);
  navbarEvents();
};

export default loadNavbar;
