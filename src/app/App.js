import React from 'react';
import { Provider } from 'react-redux';

import MainApp from './Main';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
