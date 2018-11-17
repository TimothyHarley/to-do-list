import $ from 'jquery';
import './navbar.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-logout') {
      firebase.auth().signOut().then(() => {
      }).catch((err) => {
        console.error('you are still logged in', err);
      });
    } else if (e.target.id === 'navbar-button-tasks') {
      $('#auth').hide();
      $('#tasks').show();
      $('#done').hide();
    } else if (e.target.id === 'navbar-button-done') {
      $('#auth').hide();
      $('#tasks').hide();
      $('#done').show();
    } else {
      $('#auth').show();
      $('#tasks').hide();
      $('#done').hide();
    }
  });
};

const loadNavbar = () => {
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
        <a id="navbar-button-logout" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  `;
  $('#navbar').html(newString);
  navbarEvents();
};

export default loadNavbar;
