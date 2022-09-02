import 'lodash';
import './style.css';
import { postData, nameInput, scoreInput } from './modules/post.js';
import renderScore from './modules/get.js';

const form = document.querySelector('.input-disp');
const refreshBtn = document.querySelector('.ref-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  renderScore();
  window.location.reload();
});

window.onload = renderScore();