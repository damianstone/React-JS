// ESTE ES EL ARCHIVO PRINCIPAL DONDE SE JUNTAN LOS COMPONENTES Y SE LLEVA HACIA EL DOM = WEB

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app')); // metodo render es lo que lleva todo al navegador

