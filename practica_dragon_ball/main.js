import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { poke, type, id, abilities, item1, item2, item3, saludar } from './desestructuracion.js'
import { getAllCharacters } from './characters.js'

getAllCharacters();

saludar()

console.log(`Pokemon: ${poke}, Tipo: ${type}`);
console.log(id);
console.log(abilities);
abilities.map((item) => {
  console.log(`Habilidad: ${item}`);
})

console.log(item1);
console.log(`${poke} tiene estas habilidades: ${item1}, ${item2}, ${item3}`);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
