import $ from 'jquery';
// import firebase from 'firebase/app';
import 'firebase/auth';
import './auth.scss';


const loginButton = () => {
  const domString = `
    <button id='google-auth' class='btn'>Login</button>
  `;
  $('#auth').html(domString);
  $('#google-auth').on('click', () => {
    console.log('You clicked login');
  });
};

export default loginButton;
