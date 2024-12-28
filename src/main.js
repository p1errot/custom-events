import './style.css';
import angularLogo from './angular.svg';
import { customEvents } from './custom-events.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Custom Events</h1>
    <div>
      <img id="logo" src="${angularLogo}" class="logo" alt="logo" />
    </div>
      <div class="card">
      <button id="randomImage" type="button">Random Image</button>
    </div>
  </div>
`;

window.onload = () => {
  customEvents(document.querySelector('#randomImage'), logo);
};
