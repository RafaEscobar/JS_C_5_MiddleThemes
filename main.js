import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { asyncAwait, asyncAwaitExample, asyncComponent, callbacks, demo, promiseRase, promises } from './src/concepts';
import { asyncAwaitOptimize } from './src/concepts/8_async_await_optimize';

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
      
    </div>
  </div>
`

let appCard = document.querySelector(".card");

asyncAwaitOptimize(appCard);