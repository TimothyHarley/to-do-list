import $ from 'jquery';
import './navbar.scss';

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
        <a id="navbar-button-auth" class="nav-link" href="#">Authentication</a>
      </li>
      <li class="nav-item">
        <a id="navbar-button-tasks" class="nav-link" href="#">Tasks</a>
      </li>
      <li class="nav-item">
        <a id="navbar-button-completed" class="nav-link" href="#">Completed Tasks</a>
      </li>
      <li class="nav-item">
        <a id="navbar-button-logout" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  `;
  $('#navbar').html(newString);
};

export default loadNavbar;
