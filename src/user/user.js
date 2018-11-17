import $ from 'jquery';
import './user.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

const logout = () => {
  $('#logout-button').on('click', () => {
    firebase.auth().signOut().then(() => {
    }).catch((err) => {
      console.error('you are still logged in', err);
    });
  });
};

const userDiv = () => {
  const newString = `
  <button id="logout-button" type="button" class="btn btn-secondary btn-lg">Logout</button>
  `;
  $('#user').html(newString);
  logout();
};

export default userDiv;
