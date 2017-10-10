import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './index.css';
import Calculator from './containers/Calculator';
import reducers from './reducers';
import registerServiceWorker from './utils/registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="frame">
      <Calculator />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
