import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/configureStore.js'
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker'
import './index.css';

import reportWebVitals from './reportWebVitals';

//const store = createStore(() => {}, {})




ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//registerServiceWorker()
