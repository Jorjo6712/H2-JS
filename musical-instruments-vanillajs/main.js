import init from './ChoirController.js';

document.querySelector('#app').innerHTML = `
  <div stlye='display: flex-col;'>
    <h1> Welcome to the choir! </h1>
    <select style='width: 20vh;' id='instrument-dropdown'> 
      <option value='Guitar'> Guitar </option>
      <option value='Harp'> Harp </option>
      <option value='Flute'> Flute </option>
      <option value='Saxophone'> Saxophone </option>
    </select>
    <button id='play-button'> Play </button>
  </div>
`
init()