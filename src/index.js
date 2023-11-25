//import sum from './utils/sum.js'
//console.log(sum(2, 2));
import Template from './templates/Template.js';
import './styles/main.css';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
