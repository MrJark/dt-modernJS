import './style.css';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { environmentsComponent } from './src/concepts/01-environments';
import { promiseComponent } from './src/concepts/03-promises';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { promiseRaceComponent } from './src/concepts/04-promise-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-async-await';
import { asyncandawaitComponent } from './src/concepts/07-async-await';
import { forAwaitComponent } from './src/concepts/08-for-await';
import { ejGeneratorComponent } from './src/concepts/09-ej-generators';
import { generatorComponent } from './src/concepts/10-generators';
import { asyncGeneComponent } from './src/concepts/11-generator-async';

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

const element = document.querySelector('.card');

// environmentsComponent(element);
// callbacksComponent( element );
// promiseComponent (element );
// promiseRaceComponent(element);
// asyncComponent( element );
// asyncAwaitComponent(element);
// asyncandawaitComponent(element);
// forAwaitComponent(element);
// ejGeneratorComponent(element);
// generatorComponent(element);
asyncGeneComponent(element);