import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import { increaseScore } from './redux/actions'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

window.store = store;
window.increaseScore = increaseScore;
