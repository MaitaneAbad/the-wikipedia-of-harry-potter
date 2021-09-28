// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, //Le indicamos que el componente HashRouter es ahora la madre de App. Esto hace que tanto App como todos sus componentes hijas, nietas... puedan trabajar con las rutas.
  document.getElementById('root') // estamos diciendo que vamos a usar las rutas con Hash.
);

//Nota: en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas, tienes que cambiar en este fichero la palabra HashRouter por BrowserRouter.
