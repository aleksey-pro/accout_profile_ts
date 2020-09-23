import React from 'react';
import ReactDOM from 'react-dom';
import CreateProductApp from './CreateProductApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CreateProductApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
