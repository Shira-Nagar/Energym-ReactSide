import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import MyApp from "./myApp"
<<<<<<< HEAD



ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
)

=======
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


>>>>>>> 36dd06b... update
// serviceWorker.unregister();
